<template>
  <div>
    <h3>Todos</h3>
    <div class="legend">
      <span>Mark as complete?</span>
      <div><span class="incomplete-box"></span> = Incomplete</div>
      <div><span class="complete-box"></span> = Complete</div>
    </div>
    <div class="todo-list">
      <div
        v-for="(todo, idx) in allTodos"
        :key="idx"
        @click="onClick(todo)"
        class="todo"
        :class="{ 'is-complete': todo.completed }"
      >
        {{ todo.title }}
        <i @click="deleteTodo(todo.id)" class="fas fa-trash-alt"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "TodoList",
  methods: {
    ...mapActions(["fetchTodos", "deletedTodo", "updateTodo"]),
    onClick(currentTodo) {
      const updatedTodo = {
        id: currentTodo.id,
        title: currentTodo.title,
        completed: !completed,
      }
      this.updateTodo(updatedTodo)
    },
  },
  computed: {
    ...mapGetters([
      "allTodos"
    ])
  },
  created() {
    this.fetchTodos()
  }
};
</script>

<style scoped>
.todo-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 0.3125rem;
  text-align: center;
  position: relative;
  cursor: pointer;
}

i {
  position: absolute;
  bottom: 0.625rem;
  right: 0.625rem;
  color: #fff;
  cursor: pointer;
}

.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}

.complete-box {
  display: inline-block;
  width: 0.625rem;
  height: 0.625rem;
  background: #35495e;
}

.incomplete-box {
  display: inline-block;
  width: 0.625rem;
  height: 0.625rem;
  background: #41b882;
}

@media (max-width: 31.25rem) {
  .todo-list {
    grid-template-columns: 1fr;
  }
}
</style>
