<template>
  <v-app-bar color="amber lighten-1" dark app width="100%" sticky>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <router-link :to="{ name: 'service' }">
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>
    </router-link>

    <v-spacer></v-spacer>

    <v-btn
      :to="{ name: 'serviceform'}"
      title="Cadastrar um Serviço"
      class="mx-2"
      fab
      dark
      small
      color="pink darken-1"
    >
      <v-icon color="amber lighten-1" dark>mdi-plus-circle</v-icon>
    </v-btn>

    <div class="text-center">
      <v-menu top :close-on-click="closeOnClick">
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" text>
            <v-avatar size="36">
              <v-img class="elevation-1" :src="require('@/assets/images/profile01.jpg')"></v-img>
            </v-avatar>
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <img :src="require('@/assets/images/profile01.jpg')" alt="John" />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>Julia Castro</v-list-item-title>
              <v-list-item-subtitle>Petty Mania</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn v-if="blocked" text color="red">
                <v-icon>mdi-block-helper</v-icon>
              </v-btn>
              <v-btn v-else text color="success">
                <v-icon>mdi-check-decagram</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>

          <v-divider></v-divider>

          <v-list shaped>
            <v-list-item-group color="primary">
              <v-list-item v-for="(option, i) in menuOptions" :key="i" @click="redirect(option)">
                <v-list-item-icon>
                  <v-icon v-text="option.icon" color="orange" />
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="option.text" />
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-list>
      </v-menu>
    </div>
  </v-app-bar>
</template>
<script>
export default {
  data() {
    return {
      menuOptions: [
        {
          text: "Meu Perfil",
          icon: "mdi-account-details",
          routerName: "userprofile",
        },
        {
          text: "Meus Serviços",
          icon: "mdi-domain",
          routerName: "userservices",
        },
        { text: "Proventos", icon: "mdi-account-cash", routerName: "sometest" },
      ],
      closeOnClick: true,
      blocked: false,
    };
  },
  methods: {
    redirect(option) {
      if(this.$route.name !== option.routerName)
        this.$router.push({ name: option.routerName })
    },
  },
};
</script>