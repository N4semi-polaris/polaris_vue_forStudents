<template>
  <div class="home">
    <p>this is home.vue</p>
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
