// 封装HTTP函数
import axios from 'axios'

const baseURL = 'http://localhost:3001/api'

const api = axios.create({
  baseURL
})

export const fetchData = async () => {
  const response = await api.get('/data')
  return response.data
}

export const addData = async (name: string, description: string) => {
  const response = await api.post('/data', { name, description })
  return response.data
}

export const updateData = async (id: number, name: string, description: string) => {
  const response = await api.put(`/data/${id}`, { id, name, description })
  return response.data
}

export const deleteData = async (id: number) => {
  const response = await api.delete(`/data/${id}`)
  return response
}
