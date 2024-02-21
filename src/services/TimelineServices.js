import axios from 'axios';

const baseURL = 'https://marble.azurewebsites.net/api';

const timelineService = {
  getTimelines() {
    return axios.get(`${baseURL}/Timeline/getTimelines`);
  },

  getTimelineById(id) {
    return axios.get(`${baseURL}/Timeline/getTimeline/${id}`);
  },

  async updateTimeline(id, body) {
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
        `${baseURL}/Timeline/updateTimeline/${id}`,
        body,
        { headers }
      );

      return response.data;
    } catch (error) {
      throw error;
    }
  },
  addTimeline(body, selectedTimelineIndex) {
    const token = localStorage.getItem('token');

    console.log('selectedTimelineIndex', selectedTimelineIndex);

    if (!token) {
      console.error('Token not found. User is not authenticated.');
      return Promise.reject(new Error('User not authenticated.'));
    }

    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    };

    if (
      selectedTimelineIndex === '0' ||
      selectedTimelineIndex === undefined ||
      selectedTimelineIndex === null
    ) {
      return axios.post(`${baseURL}/Timeline/addTimelineLastPosition`, body, {
        headers,
      });
    } else {
      const order = selectedTimelineIndex + 1;

      return axios.post(
        `${baseURL}/Timeline/addTimelineToPosition`,
        { ...body, order },
        {
          headers,
        }
      );
    }
  },

  deleteTimeline(id) {
    const token = localStorage.getItem('token');

    if (!token) {
      console.error('Token not found. User is not authenticated.');

      return Promise.reject(new Error('User not authenticated.'));
    }

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    return axios.delete(`${baseURL}/Timeline/deleteTimeline/${id}`, {
      headers,
    });
  },
};

export default timelineService;
