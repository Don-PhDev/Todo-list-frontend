import { createStore } from "vuex"
import TodoList from "./modules/TodoList"

export default createStore({
  modules: {
    TodoList
  }
})
