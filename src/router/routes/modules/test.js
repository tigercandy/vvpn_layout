export default [
    {
        name: 'Test',
        path: '/test',
        component: () => import('@/pages/test/index.vue'),
        meta: {
            title: '测试页面',
            role: ['admin']
        }
    },
    {
        name: 'Test2',
        path: '/test2',
        component: () => import('@/pages/test/index2.vue'),
        meta: {
            title: '测试页面2',
            role: ['admin']
        }
    }
];