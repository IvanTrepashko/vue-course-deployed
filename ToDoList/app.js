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
}).mount("#app");