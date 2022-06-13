<template>
  <div id="app" class="todoapp">
    <todo-header @addTaskFn="add"></todo-header>
    <todo-main :list="showList" @delTaskFn="del"></todo-main>
    <todo-footer
      :list="showList"
      @toggleFn="toggle"
      @clearFn="clear"
    ></todo-footer>
  </div>
</template>

<script>
import TodoFooter from "./components/TodoFooter.vue";
import TodoHeader from "./components/TodoHeader.vue";
import TodoMain from "./components/TodoMain.vue";

export default {
  components: { TodoFooter, TodoMain, TodoHeader },
  data() {
    return {
      list: [
        { id: 100, name: "吃饭", isDone: true },
        { id: 101, name: "睡觉", isDone: false },
        { id: 10, name: "打豆豆", isDone: true },
      ],
      i: 0,
    };
  },
  methods: {
    add(task) {
      // 接收到子组件的值，存入数据
      this.list.push({
        id: this.list.length ? this.list[this.list.length - 1].id + 1 : 100,
        name: task,
        isDone: false,
      });
    },
    del(id) {
      this.list = this.list.filter((item) => item.id !== id);
    },
    toggle(index) {
      this.i = index;
    },
    clear() {
      this.list = this.list.filter((item) => !item.isDone);
    },
  },
  computed: {
    showList() {
      switch (this.i) {
        case 0:
          return this.list;
          break;
        case 1:
          return this.list.filter((item) => !item.isDone);
          break;
        case 2:
          return this.list.filter((item) => item.isDone);
          break;
      }
    },
  },
};
</script>

<style>
</style>