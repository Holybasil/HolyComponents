<template>
  <ul class="holyList" v-if="data.length">
    <li
      v-for="(item, index) in data"
      :key="item.id"
      :class="{ highlight: value.find(node => node.id === item.id) }"
      @click.exact="clickItem(item, index)"
      @click.meta="addItem(item)"
      @click.shift="selectUntilItem(item, index)"
      @mousedown="allowMousemove"
      @mousemove="addMoveItem(item)"
      @mouseup="banMousemove"
    >
      {{ item.label }}
    </li>
  </ul>
  <div class="holyList" v-else>
    <p>{{ emptyText }}</p>
  </div>
</template>

<script>
export default {
  name: "HolyList",
  data() {
    return {
      addFlag: false,
      currentIndex: 0
    };
  },
  props: {
    value: {
      type: Array
    },
    data: {
      type: Array
    },
    emptyText: {
      type: String,
      default: "暂无数据"
    }
  },
  computed: {
    selected: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      }
    }
  },
  methods: {
    clickItem(item, index) {
      this.selected = [item];
      this.currentIndex = index;
    },
    addItem(item) {
      if (this.selected.find(node => node.id === item.id)) {
        this.selected = this.selected.filter(node => node.id !== item.id);
      } else {
        this.selected = [...this.selected, item];
      }
    },
    allowMousemove() {
      this.addFlag = true;
    },
    addMoveItem(item) {
      if (this.addFlag) {
        if (!this.selected.find(node => node.id === item.id)) {
          this.selected = [...this.selected, item];
        }
      }
    },
    banMousemove() {
      this.addFlag = false;
    },
    selectUntilItem(item, index) {
      const [start, end] = [this.currentIndex, index].sort((a, b) => a - b);
      this.selected = this.data.slice(start, end + 1);
    }
  }
};
</script>

<style lang="scss" scoped>
ul.holyList {
  list-style: none;
  background-color: #fff;
  li {
    padding: 6px;
    cursor: pointer;
    user-select: none;
  }
  .highlight {
    background-color: #f0f7ff;
  }
}
div.holyList {
  text-align: center;
  box-sizing: border-box;
  background-color: #fff;
  p {
    position: relative;
    margin-top: 50%;
    transform: translateY(-50%);
  }
}
</style>
