<template>
  <footer class="footer">
    <span class="todo-count"
      >剩余<strong>{{ list.length }}</strong></span
    >
    <ul class="filters">
      <li v-for="(item, index) in arr" :key="index">
        <a
          :class="{ selected: index == i }"
          href="javascript:;"
          @click="toggle(index)"
          >{{ item }}</a
        >
      </li>
    </ul>
    <button class="clear-completed" @click="clear">清除已完成</button>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      arr: ["全部", "未完成", "已完成"],
      i: 0,
    };
  },
  props: ["list"],
  methods: {
    toggle(index) {
      this.i = index;
      //  子向父传递数据
      // 0:全部   1：未完成   2：已完成
      this.$emit("toggleFn", index);
    },
    clear() {
      this.$toasted.show("嘤~ 被掏空了", {
        theme: "toasted-primary",
        position: "top-center",
        duration: 1500,
      });
      this.$emit("clearFn");
    },
  },
};
</script>