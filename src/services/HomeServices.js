import axios from 'axios';

const baseURL = 'https://marble.azurewebsites.net/api';

const homeService = {
  getItems() {
    return axios.get(`${baseURL}/Home`);
  },

  async postItem(body) {
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
      const response = await axios.post(`${baseURL}/Home`, body, { headers });

      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async putItem(id, body) {
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
      const response = await axios.put(`${baseURL}/Home/${id}`, body, {
        headers,
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async deleteItem(id) {
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
      const response = await axios.delete(`${baseURL}/Home/${id}`, {
        headers,
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default homeService;
