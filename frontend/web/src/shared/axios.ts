import Axios from 'axios';
import { API_BASE_URL } from './config.ts';

export const authClient = Axios.create({
  baseURL: API_BASE_URL,
});
