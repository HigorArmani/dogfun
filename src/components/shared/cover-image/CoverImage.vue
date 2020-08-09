<template>
  <div>
    <v-img
      class="white--text align-end mImg"
      height="200px"
      :src="require('@/assets/images/' + image)"
    />
    <v-card-title class="title">{{title}}</v-card-title>
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
.mImg {
  filter: brightness(0.8);
}
.title {
  position: absolute;
  top: 150px;
  left: 4px;
  font-size: 18px;
  color: white;
  margin-bottom: 100px;
}
</style>