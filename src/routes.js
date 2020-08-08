import Vue from 'vue'
import VueRouter from 'vue-router'
import Places from '@/components/places/Places.vue'
import PlacesDetails from '@/components/place-details/PlaceDetails.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '',
            name: 'places',
            component: Places
        },
        {
            path: 'placedetails/:id',
            name: 'placedetails',
            component: PlacesDetails
        },
    ]
})