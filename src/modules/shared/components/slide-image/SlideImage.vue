<template>
  <v-carousel :height="height">
    <v-carousel-item
      v-for="(image, i) in images"
      class="dg-slide-image"
      :key="i"
      :src="require('@/assets/images/' + image.src)"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  props: {
    height: {
      type: [String, Number],
      default: 400,
    },
    images: {
      type: Array,
      required: true,
      validator: images => images.find(image => image.src !== undefined)
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss">
.dg-slide-image {
  display: block;
}
</style>