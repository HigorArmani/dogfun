<template>
  <v-row>
    <v-col cols="3" v-for="service in services" :key="service.id">
      <ServiceItem :service="service" />
    </v-col>
  </v-row>
</template>
<script>
import ServiceItem from "./service-item/ServiceItem.vue"
import ServiceProvider from "@/providers/services/service_provider"

export default {
  components: {
    ServiceItem,
  },
  data() {
    return {
      services: [],
    };
  },
  mounted() {
    ServiceProvider.getList(success => this.services = success.data)
  },
}
</script>