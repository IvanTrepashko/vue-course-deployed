<template>
    <div class="row">
        <div class="col">    
            <base-card>
                <button @click="changeApp('todo-list')" class="btn btn-outline-primary">ToDo List</button>
            </base-card>
        </div>
        <div class="col">    
            <base-card>
                <button @click="changeApp('monster-game')" class="btn btn-outline-primary">Monster game</button>
            </base-card>
        </div>
        <div class="col">    
            <base-card>
                <button @click="changeApp('language-cards')" class="btn btn-outline-primary">Language cards</button>
            </base-card>
        </div>
    </div>    
</template>

<script>
import BaseCard from './BaseCard.vue';

export default {
    components: { BaseCard },
    emits: ['change-app'],
    methods: {
        changeApp(value) {
            this.$emit('change-app', value);
        }
    }
}
</script>

<style>

</style>