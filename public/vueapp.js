Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app = new Vue({
  el: '#vueapp',
  created: function () {
    console.log(this.todos, "TODOS on create")
  },
  beforeCreate: function () {
    console.log(this.todos, "TODOS before create")
  },
  data: {
    message: "hello yue!",
    hoverover: "hover hover",
    seen: false,
    newTodo: "",
    todos: [
      {text: "clean"},
      {text: "sleep"},
      {text: "learn a vue"}
    ]
  },
  methods: {
    toggleSeen: function(){
      return app.seen = !app.seen
      console.log("hello")
    },
    addTodo: function(e){
      e.preventDefault()
      this.todos.push({ text: this.newTodo })
      this.newTodo = ""
    }
  }
})
