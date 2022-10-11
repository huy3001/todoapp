import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://demo-lumen.wp-peterc.vcoder.host/api/',
  headers: {
    'Content-type': 'application/json'
  }
})

export default axiosClient;
