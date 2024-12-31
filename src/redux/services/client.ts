import axios, {AxiosError, AxiosResponse} from 'axios';
import Config from 'react-native-config';
import {showMessage} from 'react-native-flash-message';

const API_KEY = Config.API_KEY;
const BASE_URL = Config.BASE_URL;

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
  timeout: 5000,
});

const parser = (response: AxiosResponse<any>) => {
  let data = response.data;
  if (!data) {
    data = response;
  }

  return response;
};

const errorHandler = (error: AxiosError) => {
  if (error.code === 'ECONNABORTED') {
    showMessage({
      message: 'Timeout Error!',
      description: 'Request timed out',
      type: 'danger',
      icon: 'danger',
    });
  }
  showMessage({
    message: 'Request Error!',
    description: error.message,
    type: 'danger',
    icon: 'danger',
  });
  return Promise.reject(error?.message ?? 'Something went wrong');
};

api.interceptors.response.use(
  response => parser(response),
  error => errorHandler(error),
);

export default api;
