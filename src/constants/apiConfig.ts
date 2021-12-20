export const BASE_URL = 'http://3.111.11.219:3000/api'
import axios from 'axios';

export const apiClient = axios.create({
    baseURL: "http://3.111.11.219:3000/api" 
  });
  