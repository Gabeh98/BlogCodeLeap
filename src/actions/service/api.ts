import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://dev.codeleap.co.uk/'
  // baseURL: 'https://623e13b4df20a75d53c3d69b.mockapi.io/'
});
