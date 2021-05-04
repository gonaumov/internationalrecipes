<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <RecipesHome msg="Welcome to Your Vue.js, Element Plus + TypeScript international recipes book" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import RecipesHome from "@/components/RecipesHome.vue"; // @ is an alias to /src

@Options({
  components: {
    RecipesHome,
  },
})
export default class Home extends Vue {}
</script>
