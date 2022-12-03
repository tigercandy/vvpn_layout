import { defineStore } from 'pinia';
import { getUser } from '@/api/user';
import { removeToken } from '@/utils/token';
import { toLogin } from '@/utils/auth';

export const useUserStore = defineStore('user', {
    state() {
        return {
            userInfo: {},
        }
    },
    getters: {
        userId() {
            return this.userInfo?.id
        },
        name() {
            return this.userInfo?.name
        },
        email() {
            return this.userInfo?.email
        },
        role() {
            return this.userInfo?.role || []
        }
    },
    actions: {
        async getUserInfo() {
            try {
                const rst = await getUser()
                if (rst.code === 0) {
                    const { id, name, email, role } = rst.data
                    this.userInfo = { id, name, email, role }
                    return Promise.resolve(rst.data)
                } else {
                    return Promise.reject(rst)
                }
            } catch (e) {
                return Promise.reject(e)
            }
        },
        async logout() {
            removeToken()
            this.userInfo = {}
            toLogin()
        },
        setUserInfo(userInfo = {}) {
            this.userInfo = { ...this.userInfo, ...userInfo }
        }
    }
})