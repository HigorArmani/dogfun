import Vue from 'vue'
import VueRouter from 'vue-router'
import Service from '@/modules/app/components/service/Service.vue'
import ServiceForm from '@/modules/app/components/service-form/ServiceForm.vue'
import ServiceDetail from '@/modules/app/components/service-detail/ServiceDetail.vue'
import UserProfile from '@/modules/user/components/UserProfile'

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
        {
            path: '/userprofile',
            name: 'userprofile',
            component: UserProfile
        },
    ]
})