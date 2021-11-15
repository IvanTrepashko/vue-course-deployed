<template>
    <section>
        <h2>{{ playerName }} health</h2>
        <div class="healthbar">
            <div class="healthbar__value" :style="healthWidth"></div>
        </div>
    </section>
</template>

<script>
export default {
    props: ['playerName', 'health'],
    computed: {
        healthWidth() {
            return { width: this.health + '%'}
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
</style>