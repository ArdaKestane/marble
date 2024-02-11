import axios from 'axios';

const baseURL = 'https://marble.azurewebsites.net/api/Footer';

const token = localStorage.getItem('token');

const headers = {
  Authorization: `Bearer ${token}`,
  'Content-Type': 'application/json',
};

const footerServices = {
  getLocations() {
    return axios.get(`${baseURL}/getFooter`);
  },
  addLocation(body) {
    return axios.post(`${baseURL}/addLocation`, body, { headers });
  },
  deleteLocation(id) {
    return axios.delete(`${baseURL}/deleteLocation/${id}`, { headers });
  },

  updateInformation(body) {
    return axios.put(`${baseURL}/updateInfo`, body, { headers });
  },
};

export default footerServices;
