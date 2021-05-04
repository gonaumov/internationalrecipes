<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Here you can find recipes collected from several countries<br />
      You can also submit me one. Check about page. If you want to see a recipe
      just choose a country from recipes menu.
    </p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
})
export default class RecipesHome extends Vue {
  msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
