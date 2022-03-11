<template>
  <div>
    Filter Todos:
    <select @change="filterTodos($event)">
      <option selected>All</option>
      <option value="30">30</option>
      <option value="20">20</option>
      <option value="10">10</option>
      <option value="5">5</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from "vuex"
export default {
  name: "FilterTodos",
  methods: {
    ...mapActions(["filterTodos"])
  }
}
</script>

<style>
select {
  margin-top: 1.25rem;
  padding: 0.375rem;
  border: none;
  outline: 0;
}
</style>
