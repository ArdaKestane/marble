import axios from 'axios';

const baseURL = 'https://marble.azurewebsites.net/api';

const token = localStorage.getItem('token');

const headers = {
  Authorization: `Bearer ${token}`,
  'Content-Type': 'application/json',
};

const homeService = {
  getItems() {
    return axios.get(`${baseURL}/Home`);
  },

  async postItem(body) {
    try {
      const response = await axios.post(`${baseURL}/Home`, body, { headers });

      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async putItem(id, body) {
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
