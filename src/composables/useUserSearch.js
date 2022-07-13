import { computed, onMounted, ref } from 'vue'
import { search } from '../api/user.js'

export const useUserSearch = () => {
    const pagination = ref({
        page: 0,
        rowsPerPage: 2,
        rowsNumber: 2
    })

    const data = ref([])

    const fetchData = () => {
        search({ page: pagination.value.page - 1, size: pagination.value.rowsPerPage }).then(
            response => {
                data.value = response.content
                pagination.value.page = response.number + 1
                pagination.value.rowsNumber = response.totalPages
                // pagination.value.page = res.
            }
        )
    }
    const pageNumber = computed(() => Math.ceil(data.value.length / pagination.value.rowsPerPage))

    onMounted(fetchData)

    return {
        data,
        pagination,
        pageNumber,
        fetchData
    }
}
