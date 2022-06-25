import axios from 'axios'
import { Notify } from 'quasar'
import store from '../store/index.js'

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
instance.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        store.dispatch('user/logout')
        Notify.create({
            type: 'negative',
            message: error.message,
            position: 'top'
        })
        return Promise.reject(error)
    }
)

const { get, post, put } = instance
export { get, post, put }
