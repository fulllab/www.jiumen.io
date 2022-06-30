const Home = () => import('@/page/home')
const HomeIndex = () => import('@/page/index')

export default [
    {
        path: '/',
        component: HomeIndex,
        meta: {
            keepAlive: true,
        },
        children: [
            {
                path: '/',
                name: 'home',
                component: Home,
                meta: {
                    keepAlive: true
                }
            }
        ]
    }
]
