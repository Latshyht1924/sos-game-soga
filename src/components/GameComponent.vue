<template>
  <div class="game-container">
    <div class="score-container">
        <div class="score">Player X: {{ scoreX }}</div>
        <div class="score">Player O: {{ scoreO }}</div>
      </div>

    <table class="game-board">
        <tr v-for="row in 3" :key="row">
        <td v-for="col in 3" :key="col" class="box" @click="openModal(row, col)">
          {{ board[row - 1][col - 1] }}
        </td>
      </tr>
    </table>

    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <div>Player: {{currentPlayer}}</div>
        <div class="modal-content-choice">
          <button @click="play = true; checkAnswer()">Play</button>
          <button @click="play = false; checkAnswer()">Pass</button>
        </div>        
      </div>
    </div>

    <div v-if="showAnswerModal" class="modal">
      <div class="modal-content">
        <div>{{ currentQuestion }}</div>
        <div><input class="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2" type="text" v-model="answer" placeholder="Your answer" /></div>
        <div>
          <button @click="submitAnswer()">Submit</button>
        </div>        
        <!-- <div>Score X: {{ scoreX }} Score O: {{ scoreO }}</div> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "GameComponent",
  data() {
    return {
      board: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ],
      currentPlayer: "X",
      otherPlayer: "O",
      showModal: false,
      showAnswerModal: false,
      choice: "",
      scoreX: 0,
      scoreO: 0,
      currentRow: 0,
      currentCol: 0,
      play: false,
      answer: "",
      currentQuestion: "",
      questions: [
        "What is 2 + 2?",
      ],
    };
  },
  methods: {
    openModal(row, col) {
      if (this.board[row - 1][col - 1] !== "") return;
      this.showModal = true;
      this.currentRow = row;
      this.currentCol = col;
      this.currentQuestion = this.questions[0];
      this.play = false;
    },
    checkAnswer() {
      if(this.play)
      {
        this.showModal = false;
        this.showAnswerModal = true;
      }
      else {
        this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
        this.otherPlayer = this.currentPlayer === "X" ? "O" : "X";
      }
    },
    submitAnswer()
    {
      this.showAnswerModal = false;
      if (this.answer.trim() === "4") {
        this.board[this.currentRow - 1][this.currentCol - 1] =
        this.currentPlayer;
        if (this.currentPlayer === "X") {
          this.scoreX++;
        } else {
          this.scoreO++;
        }
      } else {
        if (this.currentPlayer === "X") {
          this.scoreO++;
        } else {
          this.scoreX++;
        }
      }
      if (this.currentPlayer === "X") {
        this.currentPlayer = "O";
        this.otherPlayer = "X";
      } else {
        this.currentPlayer = "X";
        this.otherPlayer = "O";
      }
      this.play = false;
      this.answer = "";
    }
    },
  
}
</script>
<style scoped>
.game-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.score-container{
  justify-content: center;
  align-items: center;
}

.game-board {
  border-collapse: collapse;
  margin-top: 20px;
}

.box {
  background-color: white;
  width: 100px;
  height: 100px;
  border: 1px solid black;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 50px;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border: 1px solid black;
  text-align: center;
  max-width: 80%;
  min-width: 300px;
  margin: auto;
}

.modal-content-choice {
  margin-top: 20px;
}

</style>

