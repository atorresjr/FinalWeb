import { ref } from 'vue'
import { useToggle } from '@vueuse/core'
import axios from 'axios'

export const [show, showToggle] = useToggle(false)

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    params: {
        username: import.meta.env.VITE_API_USERNAME,
        password: import.meta.env.VITE_API_PASSWORD,
    },
})

export const notes = ref([])
export const noteToEdit = ref(null)

export const getAll = async () => {
    const { data } = await api.get('/Computers')
    notes.value = data
}

export const save = async note => {
    const { id, title, content } = note
    await api.put(`/Computers/${id}`, { note: { title, content } })
}