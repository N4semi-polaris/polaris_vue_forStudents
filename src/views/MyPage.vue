<template>
  <div class="MyPage">
    <App_var />
      <h1>This is a MyPage page</h1>
  </div>
</template>

<script>
import App_var from '../components/App_bar';

export default {
  name: 'MyPage',
  components: {
    App_var,
  }
}
</script>
