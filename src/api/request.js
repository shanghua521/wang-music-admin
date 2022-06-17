import axios from 'axios'
import store from '../store'

const baseURL = import.meta.env.VITE_API_HOST
const instance = axios.create({
    baseURL
})
instance.interceptors.request.use(config => {
    if (store.getters.token) {
        config.headers.Authorization = store.getters.token
    }
    return config
})
const { get, post, put } = instance
export { get, post, put }
