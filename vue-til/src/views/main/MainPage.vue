<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">Today I Learned</h1>
      <template v-if="loading">
        <loading-spinner></loading-spinner>
      </template>
      <template v-else>
        <ul>
          <post-list-form
            v-for="postItem in postItems"
            :postItem="postItem"
            :key="postItem._id"
          ></post-list-form>
        </ul>
      </template>
    </div>
    <router-link :to="`/create`" class="create-button">
      <i class="ion-md-add"></i>
    </router-link>
  </div>
</template>

<script>
import LoadingSpinner from '../../components/common/LoadingSpinner.vue';
import PostListForm from '../../components/posts/PostListForm.vue';
export default {
  components: { PostListForm, LoadingSpinner },
  data() {
    return {
      loading: false,
      postItems: [],
    };
  },
  created() {
    this.fetchNotes();
  },
  methods: {
    async fetchNotes() {
      try {
        this.loading = true;
        const res = await this.$store.dispatch('POSTLIST');
        this.loading = false;
        this.postItems = res.posts;
        console.log(this.postItems);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
