<template>
    <div>
        <div>
            <card-translation @check-is-correct="checkIsCorrect" :isCorrect="card.isCorrect" v-for="card in quizCards" :key="card.id" :card="card" />
        </div>
        <button @click="restart" class="btn btn-outline-primary">Again</button>
    </div>
</template>

<script>
import CardTranslation from './CardTranslation.vue'

export default {
    components: {
        CardTranslation
    },
    inject: ['quizCards'],
    data() {
        return {

        }
    },
    methods: {
        restart() {
            this.quizCards.forEach(element => {
                element.isCorrect = false;
                element.input = '';
            });
            
            shuffle(this.quizCards);
        },
        checkIsCorrect(id) {
            this.quizCards.find(x => x.id === id).isCorrect = true;
        }
    }
}

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}
</script>