<template>
    <div class="page">
        <q-btn color="primary">添加用户</q-btn>
        <q-table
            v-model:pagination="pagination"
            title="Treats"
            :rows="data"
            :columns="columns"
            row-key="name"
            hide-pagination
        />
        <div class="row justify-center q-mt-md">
            <q-pagination
                v-model="pagination.page"
                color="grey-8"
                :max="pagination.rowsNumber"
                size="sm"
            />
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { search } from '../../api/user.js'

const columns = [
    {
        field: 'id',
        label: 'id'
    },
    {
        field: 'username',
        label: '用户名'
    },
    {
        field: 'nickname',
        label: '昵称'
    }
]

export default {
    name: 'Index',
    setup() {
        const pagination = ref({
            page: 0,
            rowsPerPage: 2,
            rowsNumber: 2
        })

        const data = ref([])

        const fetchData = () => {
            search({ page: pagination.value.page, size: pagination.value.rowsPerPage }).then(
                response => {
                    data.value = response.content
                    pagination.value.page = response.number + 1
                    pagination.value.rowsPerPage = response.size
                    pagination.value.rowsNumber = response.totalElements
                    // pagination.value.page = res.
                }
            )
        }
        fetchData()
        return {
            pagination,
            columns,
            data
        }
    }
}
</script>

<style scoped></style>
