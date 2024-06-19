import { instence } from '@/api/index.js';

function registerUser(userData) {
  return instence.post('/login', userData);
}

function signupUser(userData) {
  return instence.post('/signup', userData);
}

export { registerUser, signupUser };
