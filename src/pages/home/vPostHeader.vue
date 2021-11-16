<template>
  <header class="Header">
    <div class="Header__wrapImg">
      <img
        class="Header__img"
        :src="user.avatar"
        alt="Avatar"
      />
    </div>

    <div class="Header__info">
      <h2 class="Header__title">
        <span class="Header__name">{{ user.name }}</span>
        <!-- name: request, like ID -->
        <!-- <span class="Header__approve" :v-show="true">&#10004;</span> -->
        <span class="Header__nickname">{{ user.nickname }}</span>
      </h2>

      <p class="Header__text">
        {{ user.text }}
      </p>
      <span
        class="Header__hash"
        v-for="{ id, name } in user.hashtags"
        :key="id"
      >
        {{ name + ' ' }}
      </span>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => ({
        avatar: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/30107337091e90a33da10d6ce1815bb1~c5_100x100.jpeg?x-expires=1637100000&x-signature=6ARPcY1pnTRtBDnPftqbhIvsCTs%3D',
        name: 'LeoShv',
        nickname: 'Leo Shvab',
        text: 'Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem',
        hashtags: [
          { id: 1, name: '#apple' },
          { id: 2, name: '#pineapple' },
          { id: 11, name: '#apple' },
          { id: 22, name: '#pineapple' },
          { id: 13, name: '#apple' },
          { id: 24, name: '#pineapple' },
          { id: 15, name: '#apple' },
          { id: 26, name: '#pineapple' },
          { id: 28, name: '#pineapple' },
        ],
      }),
    },
    rowDirection: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped lang="scss">
.Header {
  display: flex;

  &__wrapImg {
    width: 15%;
  }

  &__img {
    width: 50px;
    height: 50px;
  }

  &__info {
    margin-left: 10px;
    width: 85%;
    text-align: left;
  }

  &__name {
    font-weight: bold;
  }

  &__nickname {
    margin-left: 10px;
    font-weight: lighter;
    font-size: .9em;
  }

  &__approve {
    margin-left: 10px;
  }

  &__hash {
    font-weight: bold;
    color: var(--color-darkGrey)
  }

  &__text {
    margin: 12px 0;
  }
}
</style>
