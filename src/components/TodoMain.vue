<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li :class="{ completed: item.isDone }" v-for="item in list" :key="item.id">
      <div class="view">
        <input class="toggle" type="checkbox" v-model="item.isDone" />
        <label>{{ item.name }}</label>
        <button class="destroy" @click="delTask(item.id)"></button>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["list"],
  methods: {
    delTask(id) {
      if (!confirm("是否删除？")) return;
      this.$toasted.show("bia~ 我没惹", {
        theme: "toasted-primary",
        position: "top-center",
        duration: 1500,
      });
      this.$emit("delTaskFn", id);
    },
  },
};
</script>