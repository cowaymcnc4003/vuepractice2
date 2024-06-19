import axios from 'axios';

function createInstence() {
  return axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
}

export const instence = createInstence();
