<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

input {
  display: block;
  margin-bottom: 20px;
  padding: 10px;
  font-size: 18px;
}

button {
  display: inline-block;
  background-color: #2c3e50;
  color: #fff;
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  cursor: pointer;
  margin-right: 10px;
}

button:hover {
  background-color: #34495e;
}

h1, h2 {
  margin-bottom: 20px;
}
</style>
