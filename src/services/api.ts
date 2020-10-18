import axios from 'axios';

const api = axios.create({
    baseURL: 'https://ambackend-com-br.umbler.net/'
});

export default api;