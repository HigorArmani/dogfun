<template>
    <div>
      <v-navigation-drawer v-model="drawer" permanent>
      <br /><br />
      <v-container fluid>
        <v-row align="center">
          <v-col cols="12">
            <v-autocomplete dense filled label="Buscar..." hide-no-data></v-autocomplete>
          </v-col>
        </v-row>
      </v-container>

      <v-list subheader two-line flat>

        <FilterItem groupName="Opções de Buscas" :filters="builds"/>
        <FilterItem groupName="Locais" :filters="states"/>

      </v-list>
    </v-navigation-drawer>
    </div>
</template>
<script>
import { FILTER_TYPES } from "@/utils/cons/filter.js"
import FilterItem from './filter-item/FilterItem.vue'

export default {
  components: {
    FilterItem
  },
  data() {
    return {
      drawer: false,
      filters: [
        // DEVE VIR DA API
        {
          id: 1,
          title: "Residências",
          hints: "Casas, quintais...",
          type: FILTER_TYPES.BUILD,
        },
        {
          id: 2,
          title: "Petshop",
          hints: "Fantasias, roupas...",
          type: FILTER_TYPES.BUILD,
        },
        {
          id: 3,
          title: "Espirito Santo",
          hints: "Serra, Vitoria...",
          type: FILTER_TYPES.STATE,
        },
        {
          id: 4,
          title: "Bahia",
          hints: "Teixeira de Freitas, Prado...",
          type: FILTER_TYPES.STATE,
        },
        {
          id: 5,
          title: "São Paulo",
          hints: "Campinas, Osasco...",
          type: FILTER_TYPES.STATE,
        },
      ],
    }
  },
  computed: {
    builds() {
      return this.filters.filter((filter) => filter.type == FILTER_TYPES.BUILD)
    },
    states() {
      return this.filters.filter((filter) => filter.type == FILTER_TYPES.STATE)
    },
  },
}
</script>