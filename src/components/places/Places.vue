<template>
  <v-row>
    <v-col cols="3" v-for="place in places" :key="place.id">
      <PlacesItem :place="place" />
    </v-col>
  </v-row>
</template>
<script>
import PlacesItem from "./places-item/PlacesItem.vue"

export default {
  components: {
    PlacesItem,
  },
  data() {
    return {
      places: [
        {
          id: 1,
          title: "Casinha Dog",
          description: "Um lugar Confortavel para o seu cão",
          stars: 4,
          image: 'place01.jpg'
        },
        {
          id: 2,
          title: "Pet da July",
          description: "Venha cuidar do seu dog com a July",
          stars: 5,
          image: 'place02.jpg'
        },
        {
          id: 3,
          title: "Dog Summer",
          description: "O Lugar perfeito para seu cão passar o verão",
          stars: 3,
          image: 'place08.jpg'
        },
        {
          id: 4,
          title: "Free Dog House",
          description: "Seu cachorro jamais se sentirá tão livre quanto aqui",
          stars: 2,
          image: 'place04.jpg'
        },
        {
          id: 5,
          title: "Bar do Cão",
          description: "Deixe seu cão se sentar com seus amigos e se divertir",
          stars: 3,
          image: 'place05.jpg'
        },
        {
          id: 6,
          title: "Bar do Cão",
          description: "Deixe seu cão se sentar com seus amigos e se divertir",
          stars: 4,
          image: 'place06.jpg'
        },
        {
          id: 7,
          title: "Bar do Cão",
          description: "Deixe seu cão se sentar com seus amigos e se divertir",
          stars: 4,
          image: 'place07.jpg'
        },
        {
          id: 8,
          title: "Bar do Cão",
          description: "Deixe seu cão se sentar com seus amigos e se divertir",
          stars: 5,
          image: 'place03.jpg'
        },
      ],
    };
  },
};
</script>