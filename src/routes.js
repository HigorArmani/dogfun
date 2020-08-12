import Vue from 'vue'
import VueRouter from 'vue-router'
import Service from '@/components/service/Service.vue'
import ServiceForm from '@/components/service-form/ServiceForm.vue'
import ServiceDetail from '@/components/service-detail/ServiceDetail.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '',
            name: 'service',
            component: Service
        },
        {
            path: '/service/form',
            name: 'serviceform',
            component: ServiceForm
        },
        {
            path: '/servicedetail/:id/:description',
            name: 'servicedetail',
            component: ServiceDetail
        },

    ]
})