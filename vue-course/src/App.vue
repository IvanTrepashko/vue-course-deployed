<template>
  <div class="container">
    <component :is="currentApp" @change-app="appChanged"></component>
    <footer>
      <button v-show="currentApp !== 'main-page'" class="btn btn-outline-secondary" @click="appChanged('main-page')">Get back</button>
    </footer>
  </div>
</template>

<script>
import MainPage from './components/MainPage.vue'
import TodoList from './components/todolist/TodoList.vue'
import MonsterGame from './components/monster/MonsterGame.vue'
import LanguageCards from './components/language/LanguageCards.vue'
import TicTacToe from './components/tictactoe/TicTacToe.vue'
import TheResources from './components/learning/TheResources.vue'

export default {
  provide: {
    quit: function () {
      this.currentApp = 'main-page';
    }
  },
  name: 'App',
  components: {
    MainPage,
    TodoList,
    MonsterGame,
    LanguageCards,
    TicTacToe,
    TheResources
  },
  data() {
    return {
      currentApp: 'main-page'
    }
  },
  methods: {
    appChanged(value) {
      this.currentApp = value;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
