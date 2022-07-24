import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';

const axiosMockInstance = axios.create({
  baseURL: 'http://192.168.1.104:3000',
});

const axiosInstance = axios.create({
  baseURL: 'http://192.168.1.104:3000',
});

export const axiosMockAdapterInstance = new AxiosMockAdapter(axiosMockInstance);

export default process.env.NODE_ENV === 'development'
  ? axiosMockInstance
  : axiosInstance;
