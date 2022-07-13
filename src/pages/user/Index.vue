<template>
    <div class="page">
        <q-btn color="primary" @click="showDialog">添加用户</q-btn>
        <q-table
            v-model:pagination="pagination"
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
                @click="fetchData"
            />
        </div>
        <CreateDialog v-if="show" @hide="hideDialog" @create-success="fetchData" />
    </div>
</template>

<script setup>
import { useUserSearch } from '../../composables/useUserSearch.js'
import { useToggleDialog } from '../../composables/useToggleDialog.js'
import CreateDialog from './CreateDialog.vue'
import { ref } from 'vue'

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
const show = ref(false)
const { showDialog, hideDialog } = useToggleDialog(show)
const { data, pagination, fetchData } = useUserSearch()
</script>

<style scoped></style>
