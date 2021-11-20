<template>
    <div class="container">
    <h1>Tic-Tac-Toe</h1>
    <div class="play-area mt-5">
        <div id="block_0" class="block"></div>
        <div id="block_1" class="block"></div>
        <div id="block_2" class="block"></div>
        <div id="block_3" class="block"></div>
        <div id="block_4" class="block"></div>
        <div id="block_5" class="block"></div>
        <div id="block_6" class="block"></div>
        <div id="block_7" class="block"></div>
        <div id="block_8" class="block"></div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        
    }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

.container {
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.play-area {
  display: grid;
  width: 300px;
  height: 300px;
  grid-template-columns: auto auto auto;
}
.block {
  display: flex;
  width: 100px;
  height: 100px;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: bold;
  border: 3px solid black;
  transition: background 0.2s ease-in-out;
}

.block:hover {
  cursor: pointer;
  background: rgb(230, 227, 227);
}

.occupied:hover {
  background: #ff3a3a;
}

#block_0,
#block_1,
#block_2 {
  border-top: none;
}

#block_0,
#block_3,
#block_6 {
  border-left: none;
}

#block_6,
#block_7,
#block_8 {
  border-bottom: none;
}

#block_2,
#block_5,
#block_8 {
  border-right: none;
}
</style>