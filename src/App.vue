<template>
  <v-app>
    <!-- Barra do topo do layout principal -->
    <Topbar />

    <v-row>
      <!-- MENU ESQUERDO -->
      <v-col cols="2">
        <Menu />
      </v-col>

      <!-- Conteudo -->
      <v-col cols="9">
        <v-main>
          <v-container>
            <router-view></router-view>
          </v-container>
        </v-main>
      </v-col>
    </v-row>

    <!-- Rodapé da página -->
    <Footer />
  </v-app>
</template>

<script>
import Topbar from "@/components/layout/topbar/Topbar.vue";
import Menu from "@/components/layout/menu/Menu.vue";
import Footer from "@/components/layout/footer/Footer.vue";

export default {
  name: "App",

  components: {
    Topbar,
    Menu,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss" scoped>
.mContent {
  margin-left: 130px;
}
</style>
