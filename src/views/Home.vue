<template>
  <div class="Home">
    <h1>This is a Home page.</h1>
    <v-main>
      <Calendar />
    </v-main>
  </div>
</template>

<script>
// @ is an alias to /src
import Calendar from '../components/Calendar';

export default {
  name: 'Home',
  components: {
    Calendar,
  }
}
</script>
