<template>
  <DefaultLayaout>
    <ProfileHeader :user="this.userInfo.user" />
    <ProfileStats :stats="this.userInfo.stats" />

    <div class="Profile__listPosts">
      <div
        v-for="{id, video, stats} in userFeed || []"
        :key="id"
        class="Profile__post"
      >
        <Stats
            :stats="{
              diggCount: stats.diggCount,
              commentCount: stats.commentCount,
              playCount: stats.playCount
            }"
            class="Profile__stats"
          />
        <VideoPlayer :videoUrl="video.cover" />
      </div>
    </div>
  </DefaultLayaout>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import ProfileHeader from '@/pages/profile/vProfileHeader.vue';
import ProfileStats from '@/pages/profile/vProfileStats.vue';
import VideoPlayer from '@/components/vVideoPlayer.vue';
import Stats from '@/components/vStats.vue';
import DefaultLayaout from '@/layout/DefaultLayaout.vue';

export default {
  components: {
    ProfileHeader,
    ProfileStats,
    VideoPlayer,
    Stats,
    DefaultLayaout,
  },

  async created() {
    await this.getUserInfo(this.nameIndentificator);
    await this.getStaticUserFeed();
  },

  computed: {
    ...mapState('user', [
      'userInfo',
      'userFeed',
    ]),

    nameIndentificator() {
      return this.$route.params.name;
    },
  },

  methods: {
    ...mapActions('user', [
      'getUserInfo',
      'getStaticUserFeed',
    ]),
  },
};
</script>

<style scoped lang="scss">
.Profile {
  &__listPosts {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  &__post {
    position: relative;
    width: 22%;

    @media (max-width: 992px) {
      width: 48%;
    }

    @media (max-width: 600px) {
      width: 98%;
    }
  }

  &__stats {
    position: absolute;
    z-index: 2;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
