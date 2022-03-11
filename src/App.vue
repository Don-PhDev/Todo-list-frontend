<template>
  <div id="app">
    <div class="container"></div>
    <h1>Todo List</h1>
    <h6>Powered by: Ruby on Rails 6 | Vue 3 | Vuex 4 | PostgreSQL</h6>
    <AddTodo />
    <TodoList />
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";
import AddTodo from "./components/AddTodo.vue";

export default {
  name: "App",
  components: {
    TodoList,
    AddTodo
  },
};
</script>

<style>
body {
  font-family: "Poppins", sans-serif;
  line-height: 1.6;
  letter-spacing: 0.025rem;
  background: #e8f7f0;
}

.container {
  max-width: 68.75rem;
  margin: auto;
  padding: 0 2rem;
  overflow: auto;
}
</style>
