import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name : 'HelloWorld',
            component: () => import("./components/HelloWorld")
        },
        {
            path: '/Home',
            name: 'Home',
            component: () => import("./components/Home")
        },
        {
            path: '/Login',
            name: 'Login',
            component: () => import("./components/Login")
        },
        {
            path: '/Signup',
            name: 'Signup',
            component: () => import("./components/SignUp")
        }
    ]
})