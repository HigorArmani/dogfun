<template>
  <v-app-bar color="amber lighten-1" dark app width="100%" sticky>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <!--
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
    -->

    <v-spacer></v-spacer>

    <v-btn title="Cadastrar um Serviço" class="mx-2" fab dark small color="pink darken-1">
      <v-icon color="amber lighten-1" dark>mdi-plus-circle</v-icon>
    </v-btn>

    <v-btn target="_blank" text>
      <v-avatar size="36">
        <v-img class="elevation-1" src="https://avataaars.io"></v-img>
      </v-avatar>
    </v-btn>

  </v-app-bar>
</template>