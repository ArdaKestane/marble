<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import './assets/main.scss';
export default {
  name: 'App',
  created() {
    if (localStorage.getItem('selectedLanguage') === null) {
      localStorage.setItem('selectedLanguage', 'turkish');
    }
  }
};
</script>
