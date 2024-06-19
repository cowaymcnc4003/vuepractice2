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

function fetchPostDelete(id) {
  return posts.delete(id);
}

export {
  fetchPosts,
  fetchPostCreate,
  fetchPost,
  fetchPostEdit,
  fetchPostDelete,
};
