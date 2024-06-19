import { posts } from './index';

function fetchPosts() {
  return posts.get('/');
}

function fetchPostCreate(postsData) {
  return posts.post('/', postsData);
}

function fetchPost(id) {
  return posts.get(`/${id}`);
}

function fetchPostEdit(postsData) {
  return posts.put(postsData._id, postsData);
}

export { fetchPosts, fetchPostCreate, fetchPost, fetchPostEdit };
