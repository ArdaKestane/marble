import axios from 'axios';

const baseURL = 'https://marble.azurewebsites.net/api';

const fileService = {
  async upload(files) {
    const token = localStorage.getItem('token');

    if (!token) {
      console.error('Token not found. User is not authenticated.');

      return Promise.reject(new Error('User not authenticated.'));
    }

    const formData = new FormData();

    console.log(files);
    if (files instanceof File) {
      formData.append('files', files);
    } else {
      Array.from(files).forEach((file) => {
        console.log(file);
        formData.append('files', file);
      });
    }
    return axios.post(`${baseURL}/File/upload`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};

export default fileService;
