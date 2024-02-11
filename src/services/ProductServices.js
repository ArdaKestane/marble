import axios from 'axios';

const baseURL = 'https://marble.azurewebsites.net/api/Product/';

const productServices = {
  getProducts() {
    return axios.get(`${baseURL}getProducts`);
  },
  getTopProducts() {
    return axios.get(`${baseURL}getTopProducts`);
  },

  getProduct(id) {
    return axios.get(`${baseURL}getProduct/${id}`);
  },
  async createProduct(body) {
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
      const responnse = await axios.post(`${baseURL}createProduct`, body);

      return response.data;
    } catch (error) {
      throw error;
    }
  },
  async deleteProduct(id) {
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
      const response = await axios.delete(`${baseURL}deleteProduct/${id}`, {
        headers,
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  },
  async updateProduct(id, body) {
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
      const response = await axios.put(`${baseURL}updateProduct/${id}`, body, {
        headers,
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  },
  async insertImages(id, images) {
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
      const response = await axios.put(`${baseURL}insertImages/${id}`, JSON.stringify(images), {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async deleteImage(id, images) {
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
      const response = await axios.delete(`${baseURL}deleteImages/${id}`, {
        data: JSON.stringify(images),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  },
  async updateIsTopProduct(id, isTopProduct) {
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
      const response = await axios.put(
        `${baseURL}updateIsTopProduct/${id}`,
        JSON.stringify(isTopProduct),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default productServices;
