export const basicRoutes = [
    {
        name: 'Login',
        path: '/login',
        component: () => import('@/pages/login/index.vue'),
        isHidden: true,
        meta: {
            title: '登录页'
        }
    },
    {
        name: 'Dashboard',
        path: '/',
        component: () => import('@/pages/dashboard/index.vue'),
        meta: {
            title: '首页',
        }
    },
    {
        name: '404',
        path: '/404',
        component: () => import('@/pages/error-page/404.vue'),
        isHidden: true
    }
]

export const NOT_FOUND_ROUTE = {
    name: 'NotFound',
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    isHidden: true
}

const modules = import.meta.globEager('./modules/*.js')
const asyncRoutes = []
Object.keys(modules).forEach((key) => {
    asyncRoutes.push(...modules[key].default)
})

export { asyncRoutes }