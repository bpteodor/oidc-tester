<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import AuthForm from "./views/AuthForm.vue";

@Component({
  components: {
    Header,
    AuthForm,
    Footer,
  },
})
export default class App extends Vue {}
</script>

<style></style>
