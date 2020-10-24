import axios from 'axios';

const _DEV=0;
const _PROD=1;

const ambientes = [
    'http://localhost:3000/',
    'https://ambackend-com-br.umbler.net/'
]

const api = axios.create({
    baseURL: ambientes[_PROD]
});

export default api;