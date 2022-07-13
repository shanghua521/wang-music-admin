import axios from 'axios'
// import { Notify } from 'quasar'
import store from '../store/index.js'
import { Notify } from 'quasar'

const baseURL = import.meta.env.VITE_API_HOST
const tokenPrefix = 'Bearer '
const instance = axios.create({
    baseURL
})
instance.interceptors.request.use(config => {
    if (store.state.user.token) {
        config.headers.Authorization = tokenPrefix + store.state.user.token
    }
    return config
})

function handlerErrorResponse(response) {
    if (response.status === 401 || response.status === 403) {
        store.dispatch('logout').then(() => window.location.reload())
    }
    if (Array.isArray(response.data)) {
        response.data.forEach(item => {
            Notify.create({
                type: 'negative',
                message: item.message,
                position: 'top'
            })
        })
    } else {
        Notify.create({
            type: 'negative',
            message: response.data.message,
            position: 'top'
        })
    }
}

instance.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        handlerErrorResponse(error.response)
        return Promise.reject(error)
    }
)

const { get, post, put } = instance
export { get, post, put }
