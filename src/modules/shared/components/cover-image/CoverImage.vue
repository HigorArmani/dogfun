<template>
  <div>
    <v-img
      class="white--text align-end dg-cover-img"
      height="200px"
      :src="require('@/assets/images/' + image)"
    />
    <v-card-title class="dg-cover-title">{{title}}</v-card-title>
  </div>
</template>
<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss">
.dg-cover-img {
  filter: brightness(0.8);
}
.dg-cover-title {
  position: absolute;
  top: 150px;
  left: 4px;
  font-size: 18px;
  color: white;
  margin-bottom: 100px;
}
</style>