<template>
  <Loader v-show="!isReady" />
  <video
    v-show="isReady"
    width="320"
    height="240"
    controls
    class="VideoPlayer"
    muted
    ref="videoPlayer"
    loop
    poster="https://thumbs.dreamstime.com/t/%D0%B7%D0%B0%D0%B3%D1%80%D1%83%D0%B7%D0%BA%D0%B0-%D0%BA%D1%80%D1%83%D0%B3-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5-iconon-%D1%86%D0%B2%D0%B5%D1%82-%D1%84%D0%BE%D0%BD%D0%B0-%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE-k-170117701.jpg"
  >
  <!-- autoplay -->
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
};
</script>

<style scoped lang="scss">
.VideoPlayer {
  width: 250px;
  height: 450px;
  border-radius: 10px;
}
</style>
