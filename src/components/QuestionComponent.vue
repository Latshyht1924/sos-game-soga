<template>
  <div>
    <h2>Question</h2>
    <p>{{ questionText }}</p>
    <input type="text" v-model="answer" placeholder="Your Answer" />
    <button @click="checkAnswer">Submit</button>
  </div>
</template>

<script>
export default {
  name: 'QuestionComponent',
  data() {
    return {
      questionText: 'What is the capital of France?',
      answer: '',
    };
  },
  methods: {
    checkAnswer() {
      // Placeholder for answer checking logic
      console.log('Answer:', this.answer);
    },
  },
};
</script>