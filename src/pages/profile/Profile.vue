<template>
  <ProfileHeader :user="this.userInfo.user" />
  <ProfileStats :stats="this.userInfo.stats" />
</template>

<script>
import { mapActions, mapState } from 'vuex';
import ProfileHeader from '@/pages/profile/vProfileHeader.vue';
import ProfileStats from '@/pages/profile/vProfileStats.vue';

export default {
  components: {
    ProfileHeader,
    ProfileStats,
  },

  async created() {
    await this.getUserInfo(this.nameIndentificator);
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
