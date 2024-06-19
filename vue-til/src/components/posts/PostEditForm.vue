<template>
  <div class="contents">
    <h1 class="page-header">Edit Post</h1>
    <div class="form-wrapper">
      <form class="form" @submit.prevent="postEditSubmit">
        <div>
          <label for="title">Title:</label>
          <input id="title" v-model="title" type="text" />
        </div>
        <div>
          <label for="contents">Contents:</label>
          <textarea id="contents" type="text" v-model="contents" rows="5" />
          <p class="validation-text warning">
            Contents length must be less than 250
          </p>
        </div>
        <button type="submit" class="btn">Edit</button>
      </form>
      <p class="log"></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      contents: '',
      postData: '',
    };
  },
  async created() {
    const id = this.$route.params.id;
    const res = await this.$store.dispatch('POSTLIST', id);
    this.title = res.title;
    this.contents = res.contents;
  },
  methods: {
    async postEditSubmit() {
      const postData = {
        title: this.title,
        contents: this.contents,
        _id: this.$route.params.id,
      };
      await this.$store.dispatch('POSTEDIT', postData);
      this.$router.push('/main');
    },
  },
};
</script>

<style scoped>
.form-wrapper .form {
  width: 100%;
}

.btn {
  color: white;
}
</style>
