<template>
    <div class="container">
        <h2>{{ result }}</h2>
        <section id="controls">
        <button @click="start">Start new game</button>
        </section>
    </div>
</template>

<script>
export default {
    props: ['winner'],
    emits: ['start-new-game', 'quit'],
    methods: {
        start() {
            this.$emit('start-new-game');
        }
    },
    computed: {
        result() {
            switch (this.winner) {
                case 'draw': {
                    return "It's a draw";
                }
                case 'player': {
                    return "It's a victory. Congratulations!";
                }
                case 'monster': {
                    return "You lost. So bad...";
                }
            }

            return 'Could not find the winnner 0_0.';
        }
    }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

section {
  width: 90%;
  max-width: 40rem;
  margin: auto;
}

.container {
  text-align: center;
  padding: 0.5rem;
  margin: 1rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
}

button {
  font: inherit;
  border: 1px solid #88005b;
  background-color: #88005b;
  color: white;
  padding: 1rem 2rem;
  border-radius: 12px;
  margin: 1rem;
  width: 12rem;
  cursor: pointer;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

button:focus {
  outline: none;
}

button:hover,
button:active {
  background-color: #af0a78;
  border-color: #af0a78;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.26);
}

button:disabled {
  background-color: #ccc;
  border-color: #ccc;
  box-shadow: none;
  color: #3f3f3f;
  cursor: not-allowed;
}
</style>