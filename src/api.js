import axios from 'axios';
require('dotenv').config();

let api = axios.create({
    timeout: 10000,
    headers: ({
        'Authorization': 'Bearer stq42hqsjt3d8mjjb41ofc1u6d5pz2',
        'Client-ID': '4ew949l43cq6rcxzz650khijjy0h6y'
    })
});

export default api;