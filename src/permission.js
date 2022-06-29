import { router } from './router'
import { getToken } from './utils/auth.js'
import store from './store'
import { Notify } from 'quasar'

const whiteList = ['/login', '/403', '/404']

router.beforeEach(async (to, from, next) => {
    const hasToken = getToken()
    if (hasToken) {
        if (to.path === '/login') {
            next({ path: '/' })
        } else {
            const currentUser = store.state.user.currentUser
            const hasAdminRole =
                currentUser && currentUser.roles.some(item => item.name === 'ROLE_ADMIN')
            if (hasAdminRole) {
                next()
            } else {
                await store.dispatch('logout')
                Notify.create({
                    type: 'negative',
                    message: '您无权登录后台',
                    position: 'top'
                })
                next(`login?redirect=${to.path}`)
            }
        }
    }
    if (whiteList.indexOf(to.path) !== -1) {
        next()
    } else {
        next(`login?redirect=${to.path}`)
    }
})
