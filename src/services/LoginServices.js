import axios from 'axios';

const baseURL = 'https://marble.azurewebsites.net/api/AdminAuth';

const homeService = {
  login(body) {
    return axios.post(`${baseURL}/login`, body);
  },
};

export default homeService;
