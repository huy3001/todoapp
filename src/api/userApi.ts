import { userKeys } from '../features/user/constant';
import axiosClient from './axiosClient';

const userApi = {
  register(data: any) {
    const url = 'register/';
    return axiosClient.post(url, data);
  },
  login(data: any) {
    const url = 'login/';
    return axiosClient.post(url, data);
  },
  async getUser(params: any) {
    const newParams = {...params};
    const accessToken = localStorage.getItem(userKeys.access);
    const url = 'users/';
    const response = axiosClient.get(url, {
      params: { ...newParams },
      headers: {
          Authorization: `Bearer ${accessToken}`
      }
    });
    return response;
  },
  async getProfile(params: any) {
    const newParams = {...params};
    const accessToken = localStorage.getItem(userKeys.access);
    const url = 'profile/';
    const response = axiosClient.get(url, {
      params: { ...newParams },
      headers: {
          Authorization: `Bearer ${accessToken}`
      }
    });
    return response;
  }
}

export default userApi;