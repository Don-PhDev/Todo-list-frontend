import axios from "axios"

const api_url = "http://localhost:3000/api/v1/todos"

const state = {
  todos: []
}

const getters = {
  allTodos: (state) => state.todos
}

const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get(api_url)
    commit("setTodos", response.data)
  },
  async addTodo({ commit }, title) {
    if (title !== "") {
      const response = await axios.post(api_url,
        {
          todo: {
            title,
            is_completed: false
          }
        }
      )
      commit("newTodo", response.data)
    } else {
      alert("Todo must not be empty")
    }
  },
  async filterTodos({ commit }, opt) {
    const limit = parseInt(opt.target.options[opt.target.options.selectedIndex].innerText)
    const selectedFilter = limit !== limit ? '' : `?_limit=${limit}`
    const response = await axios.get(api_url + selectedFilter)
    commit("setTodos", response.data)
  },
  async deleteTodo({ commit }, id) {
    await axios.delete(api_url + `/${id}`)
    alert("Please press OK to confirm to confirm your deletion")
    commit("removeTodo", id)
  },
  async updateTodo({ commit }, updatedTodo) {
    const response = await axios.put(api_url + `/${updatedTodo.id}`, updatedTodo)
    commit("setUpdatedTodo", response.data)
  }
}

const mutations = {
  setTodos: (state, todos) => state.todos = todos,
  newTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) => {
    state.todos = state.todos.filter(todo => todo.id !== id)
  },
  setUpdatedTodo: (state, updatedTodo) => {
    const index = state.todos.findIndex(todo => todo.id === updatedTodo.id)
    if (index !== -1) {
      state.todos.splice(index, 1, updatedTodo)
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
