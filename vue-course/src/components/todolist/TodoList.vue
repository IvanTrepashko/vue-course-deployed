<template>
    <div class="container">
        <section class="col-sm" id="app">
                <div class="col-sm">
                    <div class="mx-auto">
                        <div class="input-group mb-4">
                            <input type="text" class="form-control" placeholder="Enter the task" v-model="taskValue" required>
                            <button class="btn btn-outline-secondary" @click="addTask" type="button" id="add-button">Add</button>
                        </div>
                        <ul class="list-group">
                            <todo-item v-for="task in tasks" :key="task.taskId" :task="task" @complete="complete" @remove="remove"></todo-item>
                        </ul>
                    </div>
                </div>
        </section>
    </div>
</template>

<script>
import _ from 'lodash'
import TodoItem from './TodoItem.vue'

export default {
    components: {
        TodoItem
    },
    data() {
        return {
            tasks: [],
            taskValue: '',
            tasksCount: 0
        };
    },
    mounted() {
      if (localStorage.tasks) {
        this.tasks = JSON.parse(localStorage.tasks);
      }
    },
    methods: {
        addTask() {
            this.tasksCount++;

            this.tasks.push({
                task: this.taskValue,
                taskId: this.tasksCount,
                isCompleted: false
            });

            localStorage.tasks = JSON.stringify(this.tasks);
        },
        remove(taskId) {
            _.remove(this.tasks, x => {
                return x.taskId == taskId;
            })

            localStorage.tasks = JSON.stringify(this.tasks);
        },   
        complete(taskId) {
            let index = _.findIndex(this.tasks, x => {
                return x.taskId == taskId;
            })
            this.tasks[index].isCompleted = !this.tasks[index].isCompleted;
            
            localStorage.tasks = JSON.stringify(this.tasks);
        }
    }
}
</script>

<style scoped>
* {
    box-sizing: border-box;
  }
  
  html {
    font-family: 'Jost', sans-serif;
  }
  
  body {
    margin: 0;
  }
  
  section {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 3rem;
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
  }
  
  h2 {
    font-size: 2rem;
    border-bottom: 4px solid #ccc;
    color: #970076;
    margin: 0 0 1rem 0;
  }
  
  p {
    font-size: 1.25rem;
    font-weight: bold;
    background-color: #970076;
    padding: 0.5rem;
    color: white;
    border-radius: 25px;
  }
  
  input {
    font: inherit;
    border: 1px solid #ccc;
  }
  
  input:focus {
    outline: none;
    border-color: #1b995e;
    background-color: #d7fdeb;
  }
  
  .button-pink {
    font: inherit;
    cursor: pointer;
    border: 1px solid #ff0077;
    background-color: #ff0077;
    color: white;
    padding: 0.05rem 1rem;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
  }
  
  button:hover,
  button:active {
    background-color: #ec3169;
    border-color: #ec3169;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
  }
</style>