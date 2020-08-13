<template>
  <div>
    <v-row align="start">
      <v-col cols="4">
        <v-card max-width="400" align="center">
          <v-img
            :src="require('@/assets/images/back.jpg')"
            class="dg-card-user-profile-background"
          />
          <v-img :src="require('@/assets/images/profile01.jpg')" class="dg-card-user-profile" />

          <br />
          <br />
          <br />

          <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>

          <h2 class="pb-0 dg-card-user-profile-name">Júlia Castro</h2>

          <br />

          <v-btn text color="purple">
            <span></span>
            <v-icon>mdi-comment</v-icon>
          </v-btn>

          <v-btn text color="primary">
            <span></span>
            <v-icon>mdi-dog</v-icon>
          </v-btn>

          <v-btn text color="success">
            <span></span>
            <v-icon>mdi-camera</v-icon>
          </v-btn>
        </v-card>
      </v-col>

      <v-col cols="7">
        <SlideImage :images="images" :height="340" />
      </v-col>
    </v-row>
    <br />
    <Rating :ratings="ratings" />
  </div>
</template>
<script>
import Rating from "@/modules/shared/components/rating/Rating.vue"
import UserRatingProvider from "@/modules/app/providers/user_rating_provider"
import SlideImage from "@/modules/shared/components/slide-image/SlideImage.vue"
export default {
  components: {
    Rating,
    SlideImage,
  },
  data() {
    return {
      ratings: [],
      images: [
        {
          src: "photo01.jpg",
        },
        {
          src: "photo02.jpg",
        },
        {
          src: "photo03.jpg",
        },
        {
          src: "photo04.jpg",
        },
      ],
    };
  },
  mounted() {
    UserRatingProvider.getList(success => this.ratings = success.data)
  },
};
</script>
<style lang="scss" scoped>
.dg-card-user-profile {
  top: 50px;
  left: 120px;
  position: absolute;
  border-radius: 50%;
  width: 164px;
  height: 164px;
}
.dg-card-user-profile-background {
  filter: brightness(0.8);
  height: 150px;
}
.dg-card-user-profile-name {
  color: #e91e63;
}
</style>