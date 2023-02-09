<template>
  <div>
    <div class="page">
    <header><h1>Vue Fire todo1</h1></header>
    <main>
      <div class="todos">
        <transition name="fade">
            <div class="write" v-if="writeState === 'add'" key="add"> <!--등록-->
            <input ref="writeArea" type="text" v-model="addItemText" @keyup.enter="addItem"/>
            <button class="btn add" @click="addItem">Add</button>
            </div>
            <div class="write edit" v-else key="edit"> <!--수정-->
            <input ref="writeArea" type="text" v-model="editItemText" @keyup.enter="editSave"/>
            <button class="btn add" @click="editSave">Save</button>
            </div>
        </transition>    
        <ul class="list" ref="list">
          <li v-for="(todo, i) in todos" :key="todo.i">
            <i @click="checkItem(i)" :class="[todo.state === 'yet' ? 'far' : 'fas', 'fa-check-square']"></i>
            <span>
              {{ todo.text }}
              <b>
                <a href="" class="edit" @click.prevent="editShow(i)">Edit</a>
                <a href="" class="delete" @click.prevent="deleteItem(i)">Del</a>
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
import {db} from '../firebase/db';

export default {
    data() {
        return {
            writeState: 'add',
            addItemText: '',
            crrEditItem: '',
            todos:[],
            todosdone:[]
        }
    },
    methods: {
        addItem() {
            if (this.addItemText === '') return;
            db.collection('todos').add({
                text: this.addItemText, 
                state: 'yet'
            }).then(sn => {
                db.collection('todos').doc(sn.id).update({
                    id: sn.id
                })
            })
            // this.todos.unshift({text: this.addItemText, state: 'yet'})
            this.addItemText = ''
        },
        checkItem(i) {
            if (this.todos[i].state === 'yet') {this.todos[i].state = 'done'}
            else {this.todos[i].state = 'yet'}
        },
        deleteItem(i) {
            // this.todos.splice(i, 1)
            db.collection('todos').doc(this.todos[i].id).delete()
        },
        editSave() {
            // if (this.editItemText === '') return;
            // this.todos[this.crrEditItem].text = this.editItemText;
            // this.editItemText = ''
            db.collection('todos')
                .doc(this.todos[this.crrEditItem].id)
                    .update({text: this.editItemText})
            this.writeState = 'add'
            this.$refs.list.children[this.crrEditItem].className = '';

        },
        editShow(i) {
            this.crrEditItem = i
            this.writeState = 'edit'
            this.editItemText = this.todos[i].text
            this.$refs.list.children[i].classList.add('editing');
        }
    },
    mounted() {
        this.$refs.writeArea.focus();
        db.collection('todos').get().then((result) => {
            result.forEach((doc)=>{
                this.todos.push(doc.data());
            })
        });
    },
    firestore: {
        todos: db.collection('todos')
    }
}
</script>

<style>
</style>