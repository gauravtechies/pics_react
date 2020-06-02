import axios from 'axios';
export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID CUjp3nY4R3nHWfgtFDnrlCPXoP1i6zX9Gi5oxqTLZBs'
    }
})