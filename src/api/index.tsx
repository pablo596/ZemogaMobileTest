import axios from 'axios';

export const JSONApi = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});
