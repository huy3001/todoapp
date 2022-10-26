import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://mockend.com/huy3001/todoapp/',
  headers: {
    'Content-type': 'application/json',
  },
});

export default axiosClient;
