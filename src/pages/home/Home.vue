<template>
  <DefaultLayaout>
    <div
      class="Home__post"
      v-for="{
        id, authorMeta, text, hashtags, diggCount, commentCount, videoUrl
      } in trendingFeed || []"
      :key="id"
    >
    <router-link
      class="Home__postLink"
      :to="`/${authorMeta.name}`"
    >
      <PostHeader
        :user="authorMeta"
        :description="{hashtags, text}"
      />
    </router-link>

      <div class="Home__video">
        <Stats
          :stats="{diggCount, commentCount}"
          class="Home__stats"
        />
        <VideoPlayer :videoUrl="videoUrl" />
      </div>
    </div>

    <button @click="fetchInfo">Fetch</button>
  </DefaultLayaout>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Stats from '@/components/vStats.vue';
import PostHeader from '@/pages/home/vPostHeader.vue';
import VideoPlayer from '@/components/vVideoPlayer.vue';
import DefaultLayaout from '@/layout/DefaultLayaout.vue';

export default {
  name: 'Home',
  components: {
    Stats,
    PostHeader,
    VideoPlayer,
    DefaultLayaout,
  },

  created() {
    this.getTrendingFeed();
  },

  computed: {
    ...mapState('trending', [
      'trendingFeed',
    ]),
  },

  methods: {
    ...mapActions('trending', [
      'getTrendingFeed',
    ]),

    ...mapActions('user', [
      'getUserInfo',
      'getStaticUserFeed',
    ]),

    fetchInfo() {
      this.getTrendingFeed();
      this.getStaticUserFeed();
      this.getUserInfo('dave.xp');
    },
  },
};
</script>

<style scoped lang="scss">
.Home {
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
