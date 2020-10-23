import axios from 'axios';



const api = axios.create({
    baseURL: 'https://ambackend-com-br.umbler.net/'
    //baseURL:'http://localhost:3000/'
});

export default api;