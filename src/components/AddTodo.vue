<template>
  <div>
    <h3></h3>
    <div class="addTodo">
      <form @submit="onSubmit">
        <input type="text" v-model="title" placeholder="Add Todo">
        <input type="submit" value="Submit">
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex"
export default {
  name: "AddTodo",
  data() {
    return {
      title: "",
    }
  },
  methods: {
    ...mapActions(["addTodo"]),
    onSubmit(event) {
      event.preventDefault()
      this.addTodo(this.title)
      this.title = ""
    }
  }
}
</script>

<style>
form {
  display: flex;
}

input[type="text"] {
  flex: 10;
  padding: 0.625rem;
  border: 1px solid #ccc;
  outline: 0;
}

input[type="text"]:hover, input[type="text"]:focus {
  border: 1px solid #41b883;
}

input[type="submit"] {
  flex: 2;
  color: #fff;
  background: #41b883;
  border: 1px solid #41b883;
  cursor: pointer;
  transition: 150ms ease-in-out;
}

input[type="submit"]:hover, input[type="submit"]:focus {
  background: #318b63;
}
</style>
