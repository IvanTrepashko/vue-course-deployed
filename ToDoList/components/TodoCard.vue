<template>
    <div class="container">
        <section class="col-sm section" id="app">
                <div class="col-sm">
                    <div class="mx-auto">
                        <div class="input-group mb-4">
                            <input type="text" class="form-control" placeholder="Task" v-model="taskValue">
                            <button class="btn btn-outline-secondary" @click="addTask" type="button" id="add-button">Add</button>
                        </div>
                        <ul class="list-group" v-for="task in tasks" :key="task">
                            <div class="container">
                                <div class="row mb-4">
                                    <li class="list-group-item col-sm-8" :id="task.taskId">{{ task.task }}</li>
                                    <button class="btn btn-success col-sm-2" @click="complete" type="button">Complete</button>
                                    <button class="btn btn-danger col-sm-2" @click="remove" type="button">Delete</button>   
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
        </section>
    </div>  
</template>

<script>
export default {
    data() {
        return {
            tasks: [],
            taskValue: '',
            tasksCount: 0
        };
    },
    methods: {
        addTask() {
            this.tasksCount++;

            this.tasks.push({
                task: this.taskValue,
                taskId: this.tasksCount
            });

        },
        complete(event) {
            let element = event.target.parentElement.querySelector('li');
            element.style="border-color: green";
        },
        remove(event) {
            _.remove(this.tasks, x => {
                let id = event.target.parentElement.querySelector('li').id;
                console.log(id);
                return x.taskId == id;
            })
        }
    }
}
</script>

<style>

</style>