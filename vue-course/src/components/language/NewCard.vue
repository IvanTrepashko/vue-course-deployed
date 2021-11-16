<template>
    <base-card>
        <form @submit.prevent="addCard">
            <div class="mb-3">
                <label for="firstLanguage" class="form-label">First language</label>
                <input type="text" v-model="firstLanguageInput" class="form-control" id="firstLanguage" placeholder="Word in the first language">
            </div>
            <div class="mb-3">
                <label for="secondLanguage" class="form-label">Second language</label>
                <input type="text" v-model="secondLanguageInput" class="form-control" id="secondLanguage" placeholder="Word in the second language" />
            </div>
            <button class="btn btn-primary">Add</button>
        </form>
    </base-card>
</template>

<script>
import BaseCard from '../BaseCard.vue'
export default {
    components: { BaseCard },
    emits: ['card-added'],
    data() {
        return {
            firstLanguageInput: '',
            secondLanguageInput: ''
        }
    },
    methods: {
        addCard() {
            this.$emit('card-added', {firstLanguage: this.firstLanguageInput, secondLanguage: this.secondLanguageInput });
            this.firstLanguageInput = '';
            this.secondLanguageInput = '';
        }
    }
}
</script>