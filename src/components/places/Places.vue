<template>
  <v-row>
    <v-col cols="3" v-for="place in places" :key="place.id">
      <PlacesItem :place="place" />
    </v-col>
  </v-row>
</template>
<script>
import PlacesItem from "./places-item/PlacesItem.vue";
import PlacesProvider from "@/providers/places_provider"

export default {
  components: {
    PlacesItem,
  },
  data() {
    return {
      places: [],
    };
  },
  mounted() {
    PlacesProvider.getList(success => this.places = success.data)
  },
};
</script>