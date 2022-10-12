import axiosClient from 'api/axiosClient';
import authHeader from 'api/authHeader';

const auth: any = authHeader();

const userServices = {
  getAllUsers() {
    const url = 'users';
    return axiosClient.get(url, {
      headers: auth,
    });
  },
  getUser(id: number) {
    const url = `users/${id}`;
    return axiosClient.get(url, {
      headers: auth,
    });
  },
  getProfile() {
    const url = 'profile';
    return axiosClient.get(url, {
      headers: auth,
    });
  },
};

export default userServices;
