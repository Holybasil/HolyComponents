<template>
  <div ref="clickoutside">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "HolyClickoutside",
  data() {
    return {
      clickTarget: null,
      exactList: []
    };
  },
  props: {
    except: {
      type: Array || String
    }
  },
  // directives: { Clickoutside },
  mounted() {
    document.addEventListener("click", this.clickEvent);
    this.exactList = this.except
      .map(item => [...document.querySelectorAll(item)])
      .flat(Infinity);
  },
  methods: {
    clickEvent(e) {
      this.clickTarget = e;
      if (
        !e.target ||
        this.$refs.clickoutside.contains(e.target) ||
        this.exactList.find(item => item.contains(e.target))
      ) {
        return;
      }
      this.$emit("handle");
    },
    handleClickoutside() {
      this.$emit("handle");
    }
  },
  beforeDestroy() {
    document.removeEventListener("click", this.clickEvent);
  }
};
</script>

<style lang="scss" scoped></style>
