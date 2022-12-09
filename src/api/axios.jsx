import axios from "axios";

export const api = axios.create({
    baseURL: 'https://rhodesapi.cyclic.app/api/'
})

export const getData = async () => {
    const response = await api.get('/operator')
    return response.data
}