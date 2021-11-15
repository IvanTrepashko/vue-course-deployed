<template>
    <section class="container">
            <h2>Battle Log</h2>
            <ul id="log">
                <li v-for="(log, index) in logs" :key="log.id">
                    <span>Turn {{ Math.ceil((logs.length - index) / 2) }}: </span>
                    <span :class="getActionTarget(log.actionBy)">{{ log.actionBy + ' '}} </span>
                    <span> {{ log.actionType }} for </span>
                    <span :class="getActionType(log.actionType)">{{ log.actionValue +' ' }} </span>
                    <span>points.</span>
                </li>
            </ul>
          </section>
</template>

<script>
export default {
    props: ['logs'],
    methods: {
        getActionTarget(value) {
            if (value === "Player") {
                return 'log--player';
            } else {
                return 'log--monster'
            }
        },
        getActionType(value) {
            if (value === 'attacks') {
                return 'log--damage';
            } else {
                return 'log--heal';
            }
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

#log {
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