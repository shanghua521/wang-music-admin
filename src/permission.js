import { router } from './router'
import { getToken } from './utils/auth.js'
// import store from './store'

const whiteList = ['/login', '/403', '/404']

router.beforeEach(async (to, from, next) => {
    const hasToken = getToken()
    if (hasToken) {
        if (to.path === '/login') {
            next({ path: '/' })
        } else {
            next()
        }
    }
    if (whiteList.indexOf(to.path) !== -1) {
        next()
    } else {
        next(`login?redirect=${to.path}`)
    }
})
