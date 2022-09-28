import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://demo-lumen.wp-peterc.vcoder.host/api/',
  headers: {
    'content-type': 'application/json'
  }
})

export default axiosClient;