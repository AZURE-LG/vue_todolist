<template>
  <header class="header">
    <h1>todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" v-model="isAll" />
    <label for="toggle-all"></label>
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      v-model.trim="taskName"
      @keyup.enter="addTask"
    />
  </header>
</template>

<script>
export default {
  props: ["list"],
  data() {
    return {
      taskName: "",
    };
  },
  computed: {
    isAll: {
      set(val) {
        // console.log(val);
        // 更改父组件的数据，复杂数据类型
        this.list.forEach((item) => (item.isDone = val));
      },
      get() {
        if (this.list.length === 0) return false;
        return this.list.every((item) => item.isDone);
      },
    },
  },
  methods: {
    addTask() {
      // console.log(this.taskName.length);
      // console.log(this.$toasted);
      if (!this.taskName.length)
        // 提示框
        return this.$toasted.show("这是一个null哦~", {
          theme: "outline",
          position: "top-center",
          duration: 1500,
        });
      this.$emit("addTaskFn", this.taskName);
      // 清空表单
      this.taskName = "";
      // 提示框
      this.$toasted.show("芜湖~ +1", {
        theme: "bubble",
        position: "top-center",
        duration: 1500,
      });
    },
  },
};
</script>
