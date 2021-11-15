<template>
  <div class="home">
    <h1>Home</h1>
    <Stats :stats="{diggCount: 10, commentCount: 2}" />
    <button @click="fetchInfo">Fetch</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Stats from '@/components/stats.vue';

export default {
  name: 'Home',
  components: {
    Stats,
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
