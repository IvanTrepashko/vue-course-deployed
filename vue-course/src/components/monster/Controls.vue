<template>
    <section>
        <button @click="attackMonster">Attack</button>
        <button :disabled="canUseSpecialAttack" @click="specialAttackMonster">Special attack</button>
        <button :disabled="canUseHeal" @click="heal">Heal</button>
        <button @click="surrender">Surrender</button>
    </section>
</template>

<script>
export default {
    props: ['turns'],
    emits: ['attack', 'special-attack', 'heal', 'surrender'],
    methods: {
        attackMonster() {
            this.$emit('attack'); 
        },
        specialAttackMonster() {
            this.$emit('special-attack');
        },
        heal() {
            this.$emit('heal');
        },
        surrender() {
            this.$emit('surrender');
        }
    },
    computed: {
        canUseSpecialAttack() {
            return (this.turns % 3 !== 0 && this.turns !== 0);
        },
        canUseHeal() {
            return (this.turns % 3 !== 0 && this.turns !== 0);
        },
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

#controls {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
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