<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
  >
    <div class="bg-white rounded-lg p-8 w-full max-w-md mx-4 relative">
      <button
        @click="closeModal"
        class="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
      >
        <svg
          class="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <h2 class="text-2xl font-bold mb-4">{{ title }}</h2>
      <p class="mb-4">{{ question }}</p>
      <input
        v-model="answer"
        type="text"
        class="border border-gray-300 rounded-md p-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        @click="submitAnswer"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuestionModal',
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    question: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      answer: '',
    };
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
        submitAnswer() {
      this.$emit('submit', this.answer, );
      this.answer = '';
    },
  },
};
</script>