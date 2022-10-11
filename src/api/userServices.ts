import axiosClient from 'api/axiosClient';
import authHeader from 'api/authHeader';

const userServices = {
    getAllUsers() {
        const url = 'users';
        return axiosClient.get(url, {
            headers: authHeader()
        });
    },
    getUser(id: number) {
        const url = `users/${id}`;
        return axiosClient.get(url, {
            headers: authHeader()
        });
    },
    getProfile() {
        const url = 'profile';
        return axiosClient.get(url, {
            headers: authHeader()
        });
    }
}

export default userServices;
