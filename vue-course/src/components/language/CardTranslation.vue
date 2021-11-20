<template>
    <base-card>
        <form @submit.prevent="check" autocomplete="off">
            <div class="mb-3">
                <label for="firstLanguage" class="form-label">First language</label>
                <input disabled="true" :value="card.firstLanguage" type="text" class="form-control" id="firstLanguage">
            </div>
            <div class="mb-3">
                <label for="translationInput" class="form-label">Translation</label>
                <input :class="isCorrect? 'correct' : 'incorrect'" :disabled="isCorrect" type="text" v-model="translationInput" class="form-control" id="translationInput" placeholder="Type the translation" />
            </div>
            <button v-if="!isCorrect" @click="check" class="btn btn-primary">Check</button>
            <div v-else>
                <p>Correct!</p>
            </div>
        </form>
    </base-card>
</template>

<script>
import BaseCard from '../ui/BaseCard.vue'

export default {
    data() {
        return {
            translationInput: this.card.input
        }
    },
    emits: ['check-is-correct'],
    components: { BaseCard },
    props: ['card', 'isCorrect'],
    methods: {
        check() {
            console.log("translationInput: " + this.translationInput);
            console.log("card.input: " + this.card.input);
            if (this.translationInput.toUpperCase() === this.card.secondLanguage.toUpperCase()) {
                this.$emit('check-is-correct', this.card.id);
                this.translationInput = '';
            }
        }
    }
}
</script>

<style scoped>
.correct {
    border-color :green;
}

.incorrect {
    border-color: red;
}
</style>