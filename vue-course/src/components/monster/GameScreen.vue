<template>
    <section id="monster" class="container">
        <p class="container">Current turn: {{ turns + 1 }}</p>
        <health-bar :health="monsterHP" playerName="Monster"></health-bar>
        <health-bar :health="playerHP" playerName="Your"></health-bar>
        <controls v-if="!winner" @attack="attack" @special-attack="specialAttackMonster" @heal="heal" @surrender="surrender" :turns="turns"></controls>
        <result @start-new-game="startNewGame" :winner="winner" v-else></result>
        <game-log v-if="logs.length !== 0" :logs="logs"></game-log>
    </section>
</template>

<script>
import HealthBar from './HealthBar.vue'
import Controls from './Controls.vue'
import Result from './Result.vue'
import GameLog from './GameLog.vue'

export default {
    components: {
        HealthBar,
        Controls,
        Result,
        GameLog
    },
    data() {
        return {
            logs: [],
            turns: 0,
            playerHP: 100,
            monsterHP: 100,
            winner: null
        }
    },
    watch: {
        monsterHP(value) {
            if (value <= 0) {
                this.bestScore = this.turns;
                this.winner = 'player';
            }
        },
        playerHP(value) {
            if (value <= 0 && this.monsterHP <= 0) {
                this.winner = 'draw';
            } else if (value <= 0) {
                this.winner = "monster";
            }
        }
    },
    inject: ['quit'],
    methods: {
        startNewGame() {
            this.turns = 0;
            this.playerHP = 100;
            this.monsterHP = 100;
            this.winner = null;
            this.logs = [];
        },
        addLogMessage(target, action, value) {
            this.logs.unshift({
                actionBy: target,
                actionType: action,
                actionValue: value
            });
        },
        attack() {
            let playerDamage = getRandomNumber(7, 15);
            if (this.monsterHP - playerDamage <= 0) {
                this.monsterHP = 0;
                this.addLogMessage('Player', 'attacks', playerDamage)
            } else {
                this.monsterHP -= playerDamage;
                this.addLogMessage('Player', 'attacks', playerDamage)
                this.attackPlayer();
            }
            this.turns++;
        },
        specialAttackMonster() {
            let playerDamage = getRandomNumber(13, 18);
            if (this.monsterHP - playerDamage <= 0) {
                this.monsterHP = 0;
                this.addLogMessage('Player', 'attacks', playerDamage);
            } else {
                this.monsterHP -= playerDamage;
                this.addLogMessage('Player', 'attacks', playerDamage);
                this.attackPlayer();
            }
            this.turns++;
        },
        heal() {
            let healValue = getRandomNumber(15, 25);
            if (this.playerHP + healValue >= 100) {
                this.playerHP = 100;
                this.addLogMessage('Player', 'heals', healValue);
            } else {
                this.playerHP += healValue;
            }
            
            this.addLogMessage('Player', 'heals', healValue);
            this.attackPlayer();
            this.turns++;

        },
        surrender() {
            this.winner = "monster";
        },
        attackPlayer() {
            let monsterDamage = getRandomNumber(10, 18);
            if (this.playerHP - monsterDamage <= 0) {
                this.playerHP = 0;
                this.addLogMessage('Monster', 'attacks', monsterDamage);
            } else {
                this.playerHP -= monsterDamage;
            }
            this.addLogMessage('Monster', 'attacks', monsterDamage);
        }
    }
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
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

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0.5rem;
  background-color: #880017;
  color: white;
  text-align: center;
  margin-bottom: 2rem;
}

section {
  width: 90%;
  max-width: 40rem;
  margin: auto;
}

.healthbar {
  width: 100%;
  height: 40px;
  border: 1px solid #575757;
  margin: 1rem 0;
  background: #fde5e5;
}

.healthbar__value {
  background-color: #00a876;
  width: 100%;
  height: 100%;
}

.container {
  text-align: center;
  padding: 0.5rem;
  margin: 1rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
}

#monster h2,
#player h2 {
  margin: 0.25rem;
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

#log ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

#log li {
  margin: 0.5rem 0;
}

.log--player {
  color: #7700ff;
}

.log--monster {
  color: #da8d00;
}

.log--damage {
  color: red;
}

.log--heal {
  color: green;
}
</style>