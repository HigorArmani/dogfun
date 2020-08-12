<template>
  <v-app>
    <!-- Barra do topo do layout principal -->
    <LayoutTopbar />

    <v-row>
      <!-- MENU ESQUERDO -->
      <v-col cols="2">
        <LayoutMenu />
      </v-col>

      <!-- Conteudo -->
      <v-col cols="9">
        <v-main>
          <router-view></router-view>
        </v-main>
      </v-col>
    </v-row>

    <!-- Rodapé da página -->
    <LayoutFooter />
  </v-app>
</template>

<script>
import LayoutTopbar from "@/modules/base/components/layout/topbar/LayoutTopbar.vue"
import LayoutMenu from "@/modules/base/components/layout/menu/LayoutMenu.vue"
import LayoutFooter from "@/modules/base/components/layout/footer/LayoutFooter.vue"

export default {
  name: "App",
  components: {
    LayoutTopbar,
    LayoutMenu,
    LayoutFooter,
  },
};
</script>
