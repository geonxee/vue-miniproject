<template>
  <div>
    <div class="page">
    <header><h1>Vue Fire todo1</h1></header>
    <main>
      <div class="todos">
        <div class="write" v-if="writeState === 'add'"> <!--등록-->
          <input ref="writeArea" type="text" v-model="addItemText" @keyup.enter="addItem"/>
          <button class="btn add" @click="addItem">Add</button>
        </div>
        <div class="write" v-else> <!--수정-->
          <input ref="writeArea" type="text" v-model="editItemText" @keyup.enter="editSave"/>
          <button class="btn add" @click="editSave">Save</button>
        </div>
        <ul class="list">
          <li v-for="(todo, i) in todos" :key="todo.i">
            <i @click="checkItem(i)" :class="[todo.state === 'yet' ? 'far' : 'fas', 'fa-check-square']"></i>
            <span>
              {{ todo.text }}
              <b>
                <a href="" class="edit" @click.prevent="editShow(i)">Edit</a>
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
            writeState: 'add',
            addItemText: '',
            crrEditItem: '',
            todos:[
                {text: '공부하기', state: 'yet'},
                {text: '운동하기', state: 'done'},
                {text: '글쓰기', state: 'done'},
            ],
            todosdone:[]
        }
    },
    methods: {
        addItem() {
            if (this.addItemText === '') return;
            this.todos.unshift({text: this.addItemText, state: 'yet'})
            this.addItemText = ''
        },
        checkItem(i) {
            if (this.todos[i].state === 'yet') {this.todos[i].state = 'done'}
            else {this.todos[i].state = 'yet'}
        },
        del(i) {
            this.todos.splice(i, 1)
        },
        editSave() {
            if (this.editItemText === '') return;
            this.todos[this.crrEditItem].text = this.editItemText;
            this.editItemText = ''
            this.writeState = 'add'
        },
        editShow(i) {
            this.crrEditItem = i
            this.writeState = 'edit'
            this.editItemText = this.todos[i].text
        }
    },
    mounted() {
        this.$refs.writeArea.focus();
    }
}
</script>

<style>
</style>