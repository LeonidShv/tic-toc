<template>
  <div class="Stats">
    <p class="Stats__text">
      <strong class="Stats__text-bold">
        {{ convertToShortForm(stats.followingCount || 0) }}
      </strong>
      following(s)
    </p>
    <p class="Stats__text">
      <strong class="Stats__text-bold">
        {{ convertToShortForm(stats.followerCount || 0) }}
      </strong>
      follower(s)
    </p>
    <p class="Stats__text">
      <strong class="Stats__text-bold">
        {{ convertToShortForm(stats.heart || stats.heartCount || 0) }}
      </strong>
      heart(s)
    </p>
  </div>
</template>

<script>
const SI_PREFIXES = {
  KILO: 1000,
  MEGA: 1000000,
  GIGA: 1000000000,
};

export default {
  props: {
    stats: {
      type: Object,
      default: () => ({
        followingCount: '',
        followerCount: '',
        heart: '',
        heartCount: '',
      }),
    },
  },

  methods: {
    convertToShortForm(count) {
      const { KILO, MEGA, GIGA } = SI_PREFIXES;
      const countNumber = Number(count);
      let result = '';

      if (countNumber >= GIGA) {
        result = `${Math.round(countNumber / GIGA)} k`;
      } else if (countNumber >= MEGA) {
        result = `${Math.round(countNumber / MEGA)} M`;
      } else if (countNumber >= KILO) {
        result = `${Math.round(countNumber / KILO)} G`;
      } else {
        result = `${countNumber}`;
      }

      return result;
    },
  },
};
</script>

<style scoped lang="scss">
.Stats {
  display: flex;
  margin-top: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--color-hover-grey);

  &__text {
    margin-right: 18px;
    font-weight: 400;
    font-size: 20px;

    &-bold {
      font-weight: bold;
      font-size: 1.1em;
    }
  }
}
</style>
