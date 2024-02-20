import axios from 'axios';

const baseURL = 'https://marble.azurewebsites.net/api';

const fileServices = {
  async getExperiences() {
    return axios.get(`${baseURL}/Experience`);
  },

  async updateExperiences(body) {
    const token = localStorage.getItem('token');

    if (!token) {
      console.error('Token not found. User is not authenticated.');

      return Promise.reject(new Error('User not authenticated.'));
    }

    return axios.put(`${baseURL}/Experience`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};

export default fileServices;
