import { create } from '../api/user.js'
import { ref } from 'vue'

export const useCreateUser = show => {
    const username = ref('')
    const password = ref('')

    const createUser = (username, password) => {
        create({ username, password }).then(() => {
            show.value = false
        })
    }

    return { createUser, username, password }
}
