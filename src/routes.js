import Vue from 'vue'
import VueRouter from 'vue-router'
import Service from '@/components/service/Service.vue'
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
            path: '/servicedetail/:id/:description',
            name: 'servicedetail',
            component: ServiceDetail
        },
    ]
})