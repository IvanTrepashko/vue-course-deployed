<template>
    <div class="container">
        <div class="row mb-4">
            <li :class="{ completed: task.isCompleted }"  class="list-group-item col-sm-8" :id="task.taskId">{{ task.task }}</li>
            <button class="btn btn-outline-success col-sm-2" @click="complete" type="button">{{ status }}</button>
            <button class="btn btn-outline-danger col-sm-2" @click="remove" type="button">Delete</button>   
        </div>
    </div>
</template>

<script>
export default {
    props: ['task'],
    emits: ['complete', 'remove'],
    computed: {
        status() {
            if (this.task.isCompleted) {
                return 'Activate'
            } else {
                return 'Complete'
            }
        }
    },
    methods: {
        complete() {
            this.$emit('complete', this.task.taskId);
        },
        remove() {
            this.$emit('remove', this.task.taskId);
        }
    }
}
</script>

<style scoped>
  .completed {
    border-color: green;
  }
</style>