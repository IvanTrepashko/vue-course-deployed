<template>
    <div class="container">
        <div v-if="cardsForQuiz.length === 0">    
            <h2>Language cards.</h2>
            <p>Add cards with words you want to remember</p>
            <new-card @card-added="addCard"></new-card>
            <p>Translate from</p>
            <div class="btn-group mb-3">
                <button @click="startQuiz(1)" class="btn btn-success">First language</button>
                <button @click="startQuiz(2)" class="btn btn-success">Second language</button>
            </div>
        </div>    
        <div v-else>
            <card-quiz :cards="cardsForQuiz"></card-quiz>
        </div>
    </div>
</template>

<script>
import NewCard from './NewCard.vue'
import CardQuiz from './CardQuiz.vue'
import { v4 as uuidv4 } from 'uuid';

export default {
    components: {
        NewCard,
        CardQuiz
    },
    provide() {
        return {
            quizCards: this.cardsForQuiz
        }
    },
    data() {
        return {
            cards: [],
            cardsForQuiz: [],
            currentQuiz: 0
        }
    },
    methods: {
        addCard(card) {
            this.cards.push({
                firstLanguage: card.firstLanguage,
                secondLanguage: card.secondLanguage,
            });
        },
        startQuiz(number) {
            if (number === 1) { 
                this.cards.forEach(element => {
                    this.cardsForQuiz.push({
                        firstLanguage: element.firstLanguage,
                        secondLanguage: element.secondLanguage,
                        isCorrect: false,
                        input: '',
                        id: uuidv4()
                    })
                });
                this.currentQuiz = 1;
            } else {
                this.cards.forEach(element => {
                    this.cardsForQuiz.push({
                        firstLanguage: element.secondLanguage,
                        secondLanguage: element.firstLanguage,
                        isCorrect: false,
                        input: '',
                        id: uuidv4()
                    })
                });
                this.currentQuiz = 2;
            }   
        }
    }
}
</script>