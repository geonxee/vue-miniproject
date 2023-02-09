<template>
  <div>
    <div class="page">
    <header><h1>Vue Fire todo1</h1></header>
    <main>
      <div class="todos">
        <div class="write">
          <input type="text" v-model="inputValue"/>
          <button class="btn add" @click="addItem()">Add</button>
        </div>
        <ul class="list">
          <li v-for="(todo, i) in todos" :key="todo.i">
            <i :class="[todo.state === 'yet' ? 'far' : 'fas', 'fa-check-square']"></i>
            <span>
              {{ todo.text }}
              <b>
                <a href="">Edit</a>
                <a href="">Del</a>
              </b>
            </span>
          </li>
        </ul>
      </div>
    </main>
    </div>
  </div>
  
</template>

<script>
export default {
    data() {
        return {
            inputValue: '',
            addItemText: [],
            todos:[
                {text: '공부하기', state: 'yet'},
                {text: '운동하기', state: 'done'},
                {text: '글쓰기', state: 'done'},
            ]
        }
    },
    methods: {
        addItem() {
            this.todos.unshift({text: this.inputValue, state: 'yet'})
            this.inputValue = ''
        }
    }
}
</script>

<style>
</style>