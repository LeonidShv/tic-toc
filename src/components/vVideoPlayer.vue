<template>
  <Loader v-show="!isReady" />
  <video
    v-show="isReady"
    width="320"
    height="240"
    controls
    class="VideoPlayer"
    autoplay
    muted
    ref="videoPlayer"
  >
    <source :src="videoUrl" />
    Your browser does not support the video tag.
  </video>
</template>

<script>
import Loader from '@/components/vLoader.vue';

export default {
  components: {
    Loader,
  },

  props: {
    isReady: {
      type: Boolean,
      default: true,
    },
    videoUrl: {
      type: String,
      default:
        'https://v39-eu.tiktokcdn.com/b701e48832bae029609015bdb84232f1/61935045/video/tos/alisg/tos-alisg-pve-0037c001/449c8bd66c7941a5ba06ef064081e855/?a=1233&br=3502&bt=1751&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZ~R_F5qkag3-I&l=20211116003123010189073132354E0776&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amttNjU6ZjtmNzMzODczNEApNDhoOTozNWU2NzdkM2Y0ZGdtcTBxcjRvY3JgLS1kMS1zcy5iNDJfMTU2NDMyXjYvNTI6Yw%3D%3D&vl=&vr=',
    },
  },

  mounted() {
    // console.log(this.$refs.videoPlayer);
  },
};
</script>

<style scoped lang="scss">
.VideoPlayer {
  width: 250px;
  height: 450px;
}
</style>
