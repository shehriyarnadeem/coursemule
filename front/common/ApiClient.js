import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';
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
  console.log(response);
  return response.data;
};

export { get, post };