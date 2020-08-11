<template>
  <div v-if="servicehints">
    <v-container class="list">
      <div v-for="hint in servicehints" :key="hint.id">
        <v-row>
          <v-card class="mx-auto" max-width="400">
            <CoverImage :image="hint.service.image" :title="hint.service.title" />

            <v-card-subtitle class="pb-0">
              <v-rating
                :value="hint.service.stars"
                color="amber"
                dense
                half-increments
                readonly
                size="20"
              />
            </v-card-subtitle>

            <v-card-text class="text--primary">
              <div>{{hint.service.description}}</div>
              <v-chip-group active-class="deep-purple accent-4 white--text" column>
                <v-chip>Petshop</v-chip>
                <v-chip>Hostel</v-chip>
                <v-chip>06:00 as 21:00</v-chip>
              </v-chip-group>
            </v-card-text>

            <v-card-actions>
              <v-btn
                color="orange"
                :to="{ name: 'servicedetail', params: { description: titleParams(hint.service), id: hint.service.id }}"
                text
              >Ver Mais</v-btn>
            </v-card-actions>
          </v-card>
        </v-row>
        <br />
      </div>
    </v-container>
  </div>
</template>
<script>
import ServiceHintProvider from "@/providers/services/service_hint_provider"
import CoverImage from "@/components/shared/cover-image/CoverImage"
export default {
  components: {
    CoverImage,
  },
  data() {
    return {
      servicehints: [],
    };
  },
  computed: {
    titleParams: () => service => service.title.split(" ").join("-"),
  },
  mounted() {
    ServiceHintProvider.getList(success => this.servicehints = success.data)
  },
};
</script>
<style lang="scss">
.list {
  overflow-y: scroll;
  overflow-x: hidden;
  max-height: 1000px;
  width: 400px;
}
.scrollable-element {
  scrollbar-width: none;
} /* make scrollbar transparent */
::-webkit-scrollbar {
  width: 0;
  background: transparent;
}
.container {
  /* IE 10+ */
  -ms-overflow-style: none;
  /* Firefox */
  scrollbar-width: none;
}
.container::-webkit-scrollbar {
  /* Safari and Chrome */
  display: none;
}
</style>