<template>
  <li>
    <div class="post-title">{{ postItem.title }}</div>
    <div class="post-contents">{{ postItem.contents }}</div>
    <div class="post-time">
      {{ postItem.createdAt | formatDate }}
      <i class="icon ion-md-create" @click="routeEditPage"></i>
      <i class="icon ion-md-trash" @click="deletePage"></i>
    </div>
  </li>
</template>

<script>
import { fetchPostDelete } from '@/api/post';

export default {
  props: {
    postItem: {
      type: Object,
      require: true,
    },
  },
  methods: {
    routeEditPage() {
      const id = this.postItem._id;
      this.$router.push(`/edit/${id}`);
    },
    async deletePage() {
      if (confirm('You want to delete is?')) {
        await fetchPostDelete(this.postItem._id);
        this.$emit('refesh');
      }
    },
  },
};
</script>

<style></style>
