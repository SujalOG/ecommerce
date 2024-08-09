
import axios from 'axios';
const DEPLOYED='https://pear-poised-hen.cyclic.app/'
const LOCALHOST='https://ecommerce-api-kappa-three.vercel.app/'

export const API_BASE_URL = LOCALHOST;

const api = axios.create({
  baseURL: API_BASE_URL,
});

const token = localStorage.getItem('jwt');

api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

api.defaults.headers.post['Content-Type'] = 'application/json';

export default api;
