import axios from 'axios';

const API_BASE_URL = 'https://coursemule-a65e519e93a4.herokuapp.com/api';
const API_HEADERS = {
  'Content-Type': 'application/json'
};

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: API_HEADERS,
  withCredentials: true
  
});

const get = async (url, params = null) => {
  const response = await apiClient.get(url);
  return response.data;
};

const post = async (url, data) => {

  const response = await apiClient.post(url,data);
  return response.data;
};

export { get, post };