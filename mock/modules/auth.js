import { resolveToken } from "../utils";

const token = {
    admin: 'admin'
}

export default [
    {
        url: '/api/auth/login',
        method: 'post',
        response: ({ body }) => {
            if (['admin'].includes(body?.name)) {
                /* console.log(token)
                console.log(body.name)
                console.log(token[body.name]) */
                return {
                    code: 0,
                    data: {
                        token: token[body.name]
                    }
                }
            } else {
                return {
                    code: -1,
                    msg: '登录失败'
                }
            }
        }
    },
    {
        url: '/api/auth/refreshToken',
        method: 'post',
        response: ({ headers }) => {
            return {
                code: 0,
                data: {
                    token: resolveToken(headers?.authorization)
                }
            }
        }
    }
]