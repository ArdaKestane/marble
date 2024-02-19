import axios from 'axios';

const baseURL = 'https://marble.azurewebsites.net/api';

const activeBarServices = {
  getActiveBar() {
    return axios.get(`${baseURL}/ActiveBar`);
  },

  async editActiveBar(body) {
    const token = localStorage.getItem('token');

    if (!token) {
      console.error('Token not found. User is not authenticated.');

      return Promise.reject(new Error('User not authenticated.'));
    }

    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    };

    try {
      const response = await axios.put(`${baseURL}/ActiveBar`, body, {
        headers,
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default activeBarServices;
