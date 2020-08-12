<template>
  <div>
    <div v-for="rating in ratings" :key="rating.id">
      <v-card class="pa-md-4 mx-lg-auto">
        <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>

        <p class="dg-text">"{{rating.review}}"</p>

        <v-card-actions>
          <v-row>
            <v-avatar color="grey darken-3" size="35">
              <v-img class="elevation-6" src="https://avataaars.io"></v-img>
            </v-avatar>
            <p class="dg-username">{{rating.userName}}</p>
          </v-row>

          <v-row align="center" justify="end">
            <v-icon class="mr-1">mdi-thumb-up</v-icon>
            <span class="subheading mr-2">{{rating.thumbsUp}}</span>

            <v-icon class="mr-1">mdi-thumb-down</v-icon>
            <span class="subheading mr-2">{{rating.thumbsDown}}</span>
          </v-row>
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
.dg-text {
  display: block;
  color: "#EC407A";
  margin-top: 10px;
  font-size: 16px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.dg-username {
  font-size: 14px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  margin-top: 10px;
  margin-left: 10px;
}
</style>