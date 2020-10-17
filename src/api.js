import axios from 'axios';
require('dotenv').config();

let api = axios.create({
    timeout: 10000,
    headers: ({
        'Authorization': 'Bearer ',
        'Client-ID': ''
    })
});

export default api;