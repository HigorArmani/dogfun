<template>
  <v-card class="mx-auto" max-width="400">

    <v-img class="white--text align-end mImg" height="200px" :src="require('@/assets/images/' + place.image)" />
    <v-card-title class="title">{{place.title}}</v-card-title>

    <span  />
    <v-card-subtitle class="pb-0">
      <v-rating :value="place.stars" color="amber" dense half-increments readonly size="20"></v-rating>
    </v-card-subtitle>

    <v-card-text class="text-primary mContent">
      <div>{{place.description}}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange" :to="{ name: 'placedetails', params: { id: place.id }}" text>Ver Mais</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: {
    place: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.mContent {
  display: block;
  height: 50px;
}
.mImg {
  filter: brightness(0.8);
}
.title{
  position: absolute;
  top: 150px;
  left: 4px;
  font-size: 18px;
  color: white;
  margin-bottom: 100px;
}

</style>