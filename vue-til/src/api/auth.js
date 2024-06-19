import { instence } from '@/api/index.js';

function registerUser(userData) {
  return instence.post('/login', userData);
}

export { registerUser };
