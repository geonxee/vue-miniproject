<template>
  <div>
    <div class="page">
    <header><h1>Vue Fire todo1</h1></header>
    <main>
      <div class="todos">
        <div class="write">
          <input type="text" v-model="inputValue" @keyup.enter="addItem"/>
          <button class="btn add" @click="addItem()">Add</button>
        </div>
        <ul class="list">
          <li v-for="(todo, i) in todos" :key="todo.i">
            <i :class="[todo.state === 'yet' ? 'far' : 'fas', 'fa-check-square']"></i>
            <span>
              {{ todo.text }}
              <b>
                <a href="" class="edit" @click.prevent="">Edit</a>
                <a href="" class="delete" @click.prevent="del(i)">Del</a>
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
            todos:[
                {text: '공부하기', state: 'yet'},
                {text: '운동하기', state: 'done'},
                {text: '글쓰기', state: 'done'},
            ]
        }
    },
    methods: {
        addItem() {
            if (this.inputValue === '') return;
            this.todos.unshift({text: this.inputValue, state: 'yet'})
            this.inputValue = ''
        },
        del(i) {
            this.todos.splice(i,1)
        },
        edit(i) {
            this.inputVlue = this.todos[i].text
        }
    }
}
</script>

<style>
</style>