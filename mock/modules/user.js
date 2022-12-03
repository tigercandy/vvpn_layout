import { resolveToken } from '../utils'

const users = {
    admin: {
        id: 1,
        name: 'admin',
        email: 'admin@163.com',
        role: ['admin'],
    },
    guest: {
        id: 2,
        name: 'guest',
        email: 'guest@163.com',
        role: []
    }
}
export default [
    {
        url: '/api/user',
        method: 'get',
        response: ({ headers }) => {
            const token = resolveToken(headers?.authorization)
            return {
                code: 0,
                data: {
                    ...(users[token] || users.guest),
                },
            }
        },
    },
]