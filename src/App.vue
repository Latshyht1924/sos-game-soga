<script>
export default {
  name: "App",
  data() {
    return {
    };
  },
};
</script>

<template>
  <div>
    <h1>SOS Game</h1>
    <router-link to="/game">Game</router-link> |
    <router-link to="/admin">Admin</router-link>
    <hr>
    <router-view />
  </div>
</template>

<style scoped>
.game-container {
  align-items: center;
}

.game-board {
  width: 300px;
  height: 300px;
  border: 1px solid black;
}
</style>


