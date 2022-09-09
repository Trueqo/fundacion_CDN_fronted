import axios from "axios";
const urlApi = 'https://fundacion-cdn.vercel.app/'



export default axios.create({
    baseURL: urlApi,
});