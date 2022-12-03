import { resolveToken } from '../utils'

const users = {
    admin: {
        id: 1,
        name: 'admin',
        email: 'admin@163.com',
        role: ['admin'],
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