import axios from 'axios';
import { setInterceptors } from './common/interceptors';

function createInstence() {
  return axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
}

function postCreateInstence(url) {
  const instence = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL}${url}`,
  });
  return setInterceptors(instence);
}

export const instence = createInstence();
export const posts = postCreateInstence('/posts');
