<template>
  <div class="home">
    <h1>Home</h1>
    <button @click="fetchInfo">Fetch</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Home',
  components: {
    // HelloWorld,
  },

  created() {},

  methods: {
    ...mapActions('trending', [
      'getTrendingFeed',
    ]),

    ...mapActions('user', [
      'getUserFeed',
      'getUserInfo',
    ]),

    fetchInfo() {
      this.getTrendingFeed();
      this.getUserFeed('dave.xp');
      this.getUserInfo('dave.xp');
    },
  },
};
</script>
