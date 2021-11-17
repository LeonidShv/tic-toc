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
        <span
          class="Header__approve"
          :v-if="user.verified"
        >
            &#10004;
        </span>
        <span class="Header__nickname">{{ user.nickName }}</span>
      </h2>

      <p class="Header__text">
        {{ description.text }}
      </p>
      <span
        class="Header__hash"
        v-for="{ id, name } in description.hashtags || []"
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
        avatar: '',
        name: '',
        nickName: '',
        verified: false,
      }),
    },
    description: {
      type: Object,
      default: () => ({
        text: '',
        hashtags: [],
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
    text-align: left;
  }

  &__img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  &__info {
    margin-left: 10px;
    width: 85%;
    text-align: left;

    @media (max-width: 600px) {
      font-size: 0.9em;
    }
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
    color: var(--color-darkGrey);
  }

  &__text {
    margin: 12px 0;
  }

  &:hover {
    background-color: var(--color-light-grey);
  }
}
</style>
