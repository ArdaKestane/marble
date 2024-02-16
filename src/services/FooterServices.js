import axios from 'axios';

const baseURL = 'https://marble.azurewebsites.net/api/Footer';

const footerServices = {
  getFooter() {
    return axios.get(`${baseURL}/getFooter`);
  },
  addLocation(body) {
    const token = localStorage.getItem('token');

    if (!token) {
      console.error('Token not found. User is not authenticated.');

      return Promise.reject(new Error('User not authenticated.'));
    }

    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    };

    return axios.post(`${baseURL}/addLocation`, body, { headers });
  },
  deleteLocation(id) {
    const token = localStorage.getItem('token');

    if (!token) {
      console.error('Token not found. User is not authenticated.');

      return Promise.reject(new Error('User not authenticated.'));
    }

    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    };

    return axios.delete(`${baseURL}/deleteLocation/${id}`, { headers });
  },

  updateInformation(body) {
    const token = localStorage.getItem('token');

    if (!token) {
      console.error('Token not found. User is not authenticated.');

      return Promise.reject(new Error('User not authenticated.'));
    }

    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    };

    return axios.put(`${baseURL}/updateInfo`, body, { headers });
  },
};

export default footerServices;
