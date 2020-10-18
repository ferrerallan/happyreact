import axios from 'axios';

const api = axios.create({
    baseURL: 'http://ambackend-com-br.umbler.net/'
});

export default api;