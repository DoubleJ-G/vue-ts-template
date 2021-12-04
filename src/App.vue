<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <ProjectInfo msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<script setup lang="ts">
  import ProjectInfo from './components/ProjectInfo.vue'
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
