import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://demo-lumen.dev.local/api/',
  headers: {
    'Content-type': 'application/json',
  },
});

export default axiosClient;
