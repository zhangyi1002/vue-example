import Vue from 'vue'
import VueRouter from 'vue-router'
import Communicate from '@/components/communicate/index'
import Slots from '@/components/slots/index'
import Notice from '@/components/notice/index'
import Recursion from '@/components/recursion/index'

Vue.use(VueRouter);

let router = new VueRouter({
    routes: [
        {
            path: '/communicate',
            name: 'Communicate',
            component: Communicate
        },
        {
            path: '/slots',
            name: 'Slots',
            component: Slots
        },
        {
            path: '/notice',
            name: 'Notice',
            component: Notice
        },
        {
            path: '/recursion',
            name: 'Recursion',
            component: Recursion
        }
    ]
});

export default router;