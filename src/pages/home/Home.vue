<template>
  <div class="Home">
    <div class="Home__post" v-for="i in 10" :key="i">
      <PostHeader />

      <div class="Home__video">
        <Stats :stats="{diggCount: 10, commentCount: 2}" class="Home__stats" />
        <VideoPlayer />
      </div>
    </div>

    <button @click="fetchInfo">Fetch</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Stats from '@/components/vStats.vue';
import PostHeader from '@/pages/home/vPostHeader.vue';
import VideoPlayer from '@/components/vVideoPlayer.vue';

export default {
  name: 'Home',
  components: {
    Stats,
    PostHeader,
    VideoPlayer,
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

<style scoped lang="scss">
.Home {
  max-width: 700px;
  margin: auto;

  &__video {
    position: relative;
    min-height: 300px;
    min-width: 200px;
    width: fit-content;
    margin: auto;
    margin-top: 20px;
  }

  &__stats {
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
  }

  &__post {
    margin-top: 25px;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--color-hover-grey);
  }
}
</style>
