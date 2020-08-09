<template>
  <div>
    <v-row>
      <v-col cols="9">
        <v-card>
          <v-img height="250" :src="require('@/assets/images/cover.jpg')" />

          <v-card-title>Cafe Badilico</v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>

              <div class="grey--text ml-4">4.5 (413)</div>
            </v-row>

            <div class="my-4 subtitle-1">$ • Italian, Cafe</div>

            <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-title>Tonight's availability</v-card-title>

          <v-card-text>
            <v-chip-group active-class="deep-purple accent-4 white--text" column>
              <v-chip>5:30PM</v-chip>

              <v-chip>7:30PM</v-chip>

              <v-chip>8:00PM</v-chip>

              <v-chip>9:00PM</v-chip>
            </v-chip-group>
          </v-card-text>

          <v-card-actions>
            <v-btn color="deep-purple lighten-2" text>Reservar</v-btn>
            <v-btn color="deep-purple lighten-2" text>Avaliar</v-btn>
          </v-card-actions>
        </v-card>

        <br />
        <Rating />
        <br />
        <Rating />
      </v-col>

      <v-col cols="3">
        <PlaceDetailsHints />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Rating from "@/components/shared/rating/Rating.vue";
import PlaceDetailsHints from "./place-details-hints/PlaceDetailsHints";

export default {
  components: {
    Rating,
    PlaceDetailsHints,
  },
  data() {
    return {
      selection: 1,
    };
  },
};
</script>