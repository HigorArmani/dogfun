<template>
  <div>
    <v-row>
      <v-col cols="9">
        <v-card v-if="service">
          <SlideImage :images="images" />

          <v-card-title>{{service.title}}</v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating
                :value="service.stars"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>

              <div class="grey--text ml-4">{{service.stars}} (25 votações)</div>
            </v-row>

            <div class="my-4 subtitle-1" color="green">R$ 50,00 diária</div>

            <div>{{ service.description }}</div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-title>Horário de Atendimento</v-card-title>

          <v-card-text>
            <v-chip-group active-class="deep-purple accent-4 white--text" column>
              <v-chip>06:00 as 21:00</v-chip>
            </v-chip-group>
          </v-card-text>

          <v-card-actions>
            <v-btn color="deep-purple lighten-2" text>Reservar</v-btn>
            <v-btn color="deep-purple lighten-2" text>Perguntar</v-btn>
          </v-card-actions>
        </v-card>

        <br />
        <Rating :ratings="ratings" />
      </v-col>

      <v-col cols="3">
        <ServiceDetailHint />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Rating from "@/modules/shared/components/rating/Rating.vue"
import SlideImage from "@/modules/shared/components/slide-image/SlideImage.vue"
import ServiceProvider from "@/modules/app/providers/service_provider"
import ServiceRatingProvider from "@/modules/app/providers/service_rating_provider"
import ServiceDetailHint from "./service-detail-hint/ServiceDetailHint"

export default {
  components: {
    Rating,
    ServiceDetailHint,
    SlideImage,
  },
  data() {
    return {
      id: this.$route.params.id,
      selection: 1,
      service: null,
      ratings: [],
      images: [
        {
          src: "slide01.jpg",
        },
        {
          src: "slide02.jpg",
        },
        {
          src: "slide03.jpg",
        },
        {
          src: "slide04.jpg",
        },
      ],
    }
  },
  methods: {
    getList() {
      ServiceProvider.get(this.id, (success) => (this.service = success.data))
    },
  },
  beforeRouteUpdate(to, from, next) {
    this.id = to.params.id
    this.getList()
    next()
  },
  mounted() {
    this.getList(),
      ServiceRatingProvider.getList((success) => (this.ratings = success.data))
  },
}

// comentario de teste
</script>