import { resolveToken } from "../utils";

const token = {
    admim: 'admin'
}

export default [
    {
        url: '/api/auth/login',
        method: 'post',
        response: ({ body }) => {
            if (['admin'].includes(body?.name)) {
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
                    token: resolveToken(headers?.auth)
                }
            }
        }
    }
]