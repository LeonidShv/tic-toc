<template>
  <header class="Header">
    <div class="Header__wrapImg">
      <img
        :src="user.avatarMedium"
        alt="Avatar"
        class="Header__img"
      />
    </div>

    <div class="Header__info">
      <h2 class="Header__name">
        {{ user.uniqueId }}
        <span
          class="Header__approve"
          :v-if="user.verified"
        >
          &#10004;
        </span>
      </h2>

      <p class="Header__nickname">{{ user.nickname }}</p>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => ({
        avatarMedium: '',
        avatarThumb: '',
        nickname: '', // name (not identificator for api request)
        uniqueId: '', // name like identificator,
        verified: false,
      }),
    },
  },
};
</script>

<style scoped lang="scss">
.Header {
  display: flex;

  &__wrapImg {
    width: 25%;
    text-align: left;

    @media (max-width: 600px) {
      margin-right: 30px;
      width: 30%;
    }
  }

  &__img {
    width: 115px;
    height: 115px;
    border-radius: 50%;
  }

  &__info {
    margin-left: 10px;
    width: 75%;
    text-align: left;

    @media (max-width: 600px) {
      width: 70%;
    }
  }

  &__name {
    font-weight: bold;
    font-size: 32px;
  }

  &__nickname {
    margin-top: 10px;
    font-weight: lighter;
    font-size: 18px;
  }

  &__approve {
    font-size: 0.7em;
  }
}
</style>
