<template>
  <div class="home">
    <h1>Home</h1>
    <PostHeader />
    <Stats :stats="{diggCount: 10, commentCount: 2}" />
    <button @click="fetchInfo">Fetch</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Stats from '@/components/vStats.vue';
import PostHeader from '@/pages/home/vPostHeader.vue';

export default {
  name: 'Home',
  components: {
    Stats,
    PostHeader,
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
