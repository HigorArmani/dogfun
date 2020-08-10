<template>
  <div>
    <v-row>
      <v-col cols="9">
        <v-card v-if="service">
          <v-img height="250" :src="require('@/assets/images/' + service.image)" />

          <v-card-title>{{service.title}}</v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating :value="service.stars" color="amber" dense half-increments readonly size="14"></v-rating>

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
import Rating from "@/components/shared/rating/Rating.vue"
import ServiceProvider from "@/providers/services/service_provider"
import ServiceDetailHint from "./service-detail-hint/ServiceDetailHint"
import RatingsProvider from "@/providers/globals/ratings_provider"

export default {
  components: {
    Rating,
    ServiceDetailHint,
  },
  data() {
    return {
      id: this.$route.params.id,
      selection: 1,
      service: null,
      ratings: []
    }
  },
  methods: {
    getList() {
      ServiceProvider.get(this.id, success => this.service = success.data)
    },
  },
  beforeRouteUpdate(to, from, next) {
    this.id = to.params.id
    this.getList()
    next()
  },
  mounted() {
    this.getList(),
    RatingsProvider.getList(success => this.ratings = success.data)
  },
}

// comentario de teste
</script>