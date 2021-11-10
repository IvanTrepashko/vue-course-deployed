Vue.createApp({
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
                taskId: this.tasksCount,
                isCompleted: false
            });

        },
        remove(event) {
            _.remove(this.tasks, x => {
                let id = event.target.parentElement.querySelector('li').id;
                return x.taskId == id;
            })
        },   
        complete(event) {
            let id = event.target.parentElement.querySelector('li').id;
            let index = _.findIndex(this.tasks, x => {
                return x.taskId == id;
            })

            this.tasks[index].isCompleted = true;
        }
    }
}).mount("#app");