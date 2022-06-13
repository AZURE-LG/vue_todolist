<template>
  <header class="header">
    <h1>todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" />
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
  data() {
    return {
      taskName: "",
    };
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
