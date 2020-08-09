<template>
  <div>
    <div v-for="hint in placeshints" :key="hint.id">
      <v-card class="mx-auto" max-width="400">
        <CoverImage :image="hint.place.image" :title="hint.place.title" />

        <v-card-subtitle class="pb-0">
          <v-rating
            :value="hint.place.stars"
            color="amber"
            dense
            half-increments
            readonly
            size="20"
          ></v-rating>
        </v-card-subtitle>

        <v-card-text class="text--primary">
          <div>{{hint.place.description}}</div>
          <v-chip-group active-class="deep-purple accent-4 white--text" column>
            <v-chip>Petshop</v-chip>
            <v-chip>Hostel</v-chip>
          </v-chip-group>
        </v-card-text>

        <v-card-actions>
          <v-btn color="orange" text>Ver Mais</v-btn>
        </v-card-actions>
      </v-card>
      <br />
    </div>
  </div>
</template>
<script>
import PlacesHintsProvider from "@/providers/places/places_hints_provider";
import CoverImage from "@/components/shared/cover-image/CoverImage";
export default {
  components: {
    CoverImage,
  },
  data() {
    return {
      placeshints: [],
    };
  },
  mounted() {
    PlacesHintsProvider.getList((success) => (this.placeshints = success.data));
  },
};
</script>