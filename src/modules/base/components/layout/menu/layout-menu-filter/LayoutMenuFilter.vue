<template>
  <div>
    <v-subheader>{{groupName}}</v-subheader>

    <v-list-item-group multiple>
      <v-list-item v-for="filter in filters" :key="filter.id" @click="addTermFilter(filter)">
        <!-- Lista de Filtros -->
        <template v-slot:default="{ active }">
          <v-list-item-action>
            <v-checkbox :input-value="active" color="primary"></v-checkbox>
          </v-list-item-action>

          <v-list-item-content :title="filter.hints">
            <v-list-item-title>{{ filter.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ filter.hints }}</v-list-item-subtitle>
          </v-list-item-content>
        </template>

      </v-list-item>
    </v-list-item-group>
  </div>
</template>
<script>
import { mapMutations } from "vuex"
export default {
  props: {
    filters: {
      type: Array,
      required: true,
    },
    groupName: {
      type: String,
      required: true,
    },
  },
  methods: {
    ...mapMutations(["addTermFilter"]),
  },
};
</script>