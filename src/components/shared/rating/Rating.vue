<template>
  <v-card class="pa-md-4 mx-lg-auto" color="#03A9F4" dark>

    <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>

    <p class="mText">Local Confortavel e Atendimento Excelente!</p>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Junior Santos</v-list-item-title>
        </v-list-item-content>

        <v-row align="center" justify="end">
          <v-icon class="mr-1" color="#f48fb1">mdi-heart</v-icon>
          <span class="subheading mr-2">256</span>
        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    //
  }),
};
</script>

<style lang="scss" scoped>
.mText {
  display: block;
  color: white;
  font-size: 20px;
}
</style>