import { posts } from './index';

function fetchPost() {
  return posts.get('/');
}

export { fetchPost };
