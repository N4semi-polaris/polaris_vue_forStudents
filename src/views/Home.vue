<template>
  <div class="Home">
    <App_bar />
    <h1>This is a Home page.</h1>
    <v-main>
      <Calendar />
    </v-main>
  </div>
</template>

<script>
// @ is an alias to /src
import Calendar from '../components/Calendar';
import App_bar from '../components/App_bar';


export default {
  name: 'Home',
  components: {
    Calendar,
    App_bar,
  }
}
</script>
