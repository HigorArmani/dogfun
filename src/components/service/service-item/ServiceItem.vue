<template>
  <v-card class="mx-auto">
    <CoverImage :image="service.image" :title="service.title" />

    <span />
    <v-card-subtitle class="pb-0">
      <v-rating :value="service.stars" color="amber" dense half-increments readonly size="20"></v-rating>
    </v-card-subtitle>

    <v-card-text class="text-primary mContent">
      <div>{{service.description}}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        :to="{ name: 'servicedetail', params: { description: titleParams, id: service.id }}"
        text
      >Ver Mais</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import CoverImage from "@/components/shared/cover-image/CoverImage"
export default {
  components: {
    CoverImage,
  },
  props: {
    service: {
      type: Object,
      required: true,
    },
  },
  computed: {
    titleParams() {
      return this.service.title.split(" ").join("-")
    },
  },
};
</script>
<style lang="scss" scoped>
.mContent {
  display: block;
  height: 50px;
}
</style>