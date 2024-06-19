import { posts } from './index';

function fetchPost() {
  return posts.get('/');
}

function fetchPostCreate(postsData) {
  return posts.post('/', postsData);
}

export { fetchPost, fetchPostCreate };
