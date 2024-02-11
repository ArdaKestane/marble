import axios from 'axios';

const baseURL = 'https://marble.azurewebsites.net/api/Product/';

const productServices = {
  getProducts() {
    return axios.get(`${baseURL}getProducts`);
  },

  getProduct(id) {
    return axios.get(`${baseURL}getProduct/${id}`);
  },

  createProduct(body) {
    return axios.post(`${baseURL}createProduct`, body);
  },

  deleteProduct(id) {
    return axios.delete(`${baseURL}deleteProduct/${id}`);
  },

  updateHeader(id, header) {
    return axios.put(`${baseURL}updateHeader/${id}`, `"${header}"`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  },

  updateDescription(id, description) {
    return axios.put(`${baseURL}updateDescription/${id}`, `"${description}"`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  },

  updateMainImage(id, mainImage) {
    return axios.put(`${baseURL}updateMainImage/${id}`, `"${mainImage}"`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  },

  insertImages(id, images) {
    return axios.put(`${baseURL}insertImages/${id}`, JSON.stringify(images), {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  },

  deleteImage(id, image) {
    return axios.delete(`${baseURL}deleteImage/${id}`, {
      data: JSON.stringify(image),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};

export default productServices;
import axios from 'axios';

const baseURL = 'https://marble.azurewebsites.net/api/Product/';

const productServices = {
  getProducts() {
    return axios.get(`${baseURL}getProducts`);
  },

  getProduct(id) {
    return axios.get(`${baseURL}getProduct/${id}`);
  },

  createProduct(body) {
    return axios.post(`${baseURL}createProduct`, body);
  },

  deleteProduct(id) {
    return axios.delete(`${baseURL}deleteProduct/${id}`);
  },

  updateHeader(id, header) {
    return axios.put(`${baseURL}updateHeader/${id}`, `"${header}"`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },

  updateDescription(id, description) {
    return axios.put(`${baseURL}updateDescription/${id}`, `"${description}"`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },

  updateMainImage(id, mainImage) {
    return axios.put(`${baseURL}updateMainImage/${id}`, `"${mainImage}"`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },

  insertImages(id, images) {
    return axios.put(`${baseURL}insertImages/${id}`, JSON.stringify(images), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },

  deleteImage(id, image) {
    return axios.delete(`${baseURL}deleteImage/${id}`, {
      data: JSON.stringify(image),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
};

export default productServices;
