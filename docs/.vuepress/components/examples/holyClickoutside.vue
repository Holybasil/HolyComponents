<template>
  <div>
    <!-- <div class="content">
      <div
        class="right"
        :class="{ highlight: holy === 'right' }"
        @click="holy = 'right'"
      >
        我是右边
      </div>
    </div> -->
    <div class="content">
      <HolyClickoutside :except="['.right']" @handle="handleClickoutside">
        <div
          class="left"
          :class="{ highlight: holy === 'left' }"
          @click="holy = 'left'"
        >
          我是左边
        </div>
      </HolyClickoutside>
      <div
        class="right"
        :class="{ highlight: holy === 'right' }"
        @click="holy = 'right'"
      >
        我是右边
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      holy: "left"
    };
  },
  methods: {
    handleClickoutside() {
      alert("处理我");
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  .highlight {
    background-color: gold;
  }
  & > div {
    cursor: pointer;
  }
}
</style>
