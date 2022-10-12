import axiosClient from 'api/axiosClient';

const authServices = {
  register(data: any) {
    const url = 'register';
    return axiosClient.post(url, data);
  },
  login(data: any) {
    const url = 'login';
    return axiosClient.post(url, data).then((response: any) => {
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    });
  },
  logout() {
    localStorage.removeItem('user');
  },
};

export default authServices;
