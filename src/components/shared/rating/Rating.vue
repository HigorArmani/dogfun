<template>
  <div>
    <div v-for="rating in ratings" :key="rating.id">
      <v-card class="pa-md-4 mx-lg-auto" color="#03A9F4" dark>
        <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>

        <p class="mText">"{{rating.review}}"</p>

        <v-card-actions>
          <v-list-item class="grow">
            <v-list-item-avatar color="grey darken-3">
              <v-img
                class="elevation-6"
                src="https://avataaars.io"
              ></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{rating.userName}}</v-list-item-title>
            </v-list-item-content>

            <v-row align="center" justify="end">
              <v-icon class="mr-1" color="#f48fb1">mdi-heart</v-icon>
              <span class="subheading mr-2">256</span>
            </v-row>
          </v-list-item>
        </v-card-actions>
      </v-card>
      <br />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ratings: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.mText {
  display: block;
  color: white;
  font-size: 20px;
}
</style>