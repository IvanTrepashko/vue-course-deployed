<template>
    <div class="container">
      <h1>Tic-Tac-Toe</h1>
      <div>
        <div class="play-area mt-5">
            <div @click="makeTurn(0,0)" id="block_0" class="block">{{ field[0][0] }}</div>
            <div @click="makeTurn(0,1)" id="block_1" class="block">{{ field[0][1] }}</div>
            <div @click="makeTurn(0,2)" id="block_2" class="block">{{ field[0][2] }}</div>
            <div @click="makeTurn(1,0)" id="block_3" class="block">{{ field[1][0] }}</div>
            <div @click="makeTurn(1,1)" id="block_4" class="block">{{ field[1][1] }}</div>
            <div @click="makeTurn(1,2)" id="block_5" class="block">{{ field[1][2] }}</div>
            <div @click="makeTurn(2,0)" id="block_6" class="block">{{ field[2][0] }}</div>
            <div @click="makeTurn(2,1)" id="block_7" class="block">{{ field[2][1] }}</div>
            <div @click="makeTurn(2,2)" id="block_8" class="block">{{ field[2][2] }}</div>
            </div>
        </div>
        <div v-if="isWinnerDetermined">
          <button class="btn btn-outline-primary mt-3 btn-lg" @click="restart">Restart</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
        field: [
          ['', '', ''],
          ['', '', ''],
          ['', '', '']
        ],
        currentSign: 'X',
        isWinnerDetermined: false,
        turnsCount: 0
      }
    },
    methods: {
        makeTurn(x, y) {
          if (this.field[x][y] !== '' || this.isWinnerDetermined) {
            return;
          }

          this.field[x][y] = this.currentSign;
          this.isWinnerDetermined = this.checkForWinner();
          this.currentSign = this.currentSign === 'X' ? '0' : 'X';
          this.turnsCount++;
          if (!this.isWinnerDetermined && this.turns == 9) {
            this.isWinnerDetermined = true;
          }
        },
        checkForWinner() {
          let board = this.field;
          for (let i = 0; i < 3; ++ i) {
            if ((board[i][0] != '') && (board[i][0] == board[i][1]) 
                            && (board[i][1] == board[i][2])) {
                return true;
            }
              if ((board[0][i] != '') && (board[0][i] == board[1][i]) 
                              && (board[1][i] == board[2][i])) {
                  return true;
              }            
          }
          if ((board[1][1] != '') && (board[0][0] == board[1][1]) 
                              && (board[1][1] == board[2][2])) {
              return true;
          }
          if ((board[1][1] != '') && (board[0][2] == board[1][1]) 
                              && (board[1][1] == board[2][0])) {
              return true;
          }        
          return false;
        },
        restart() {
          this.field = [
              ['', '', ''],
              ['', '', ''],
              ['', '', '']
            ];
          this.currentSign = 'X';
          this. isWinnerDetermined = false;
          this.turnsCount = 0;
        },
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