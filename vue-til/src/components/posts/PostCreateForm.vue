<template>
  <div class="contents">
    <h1 class="page-header">Create Post</h1>
    <div class="form-wrapper">
      <form class="form">
        <div>
          <label for="title">Title:</label>
          <input id="title" type="text" />
        </div>
        <div>
          <label for="contents">Contents:</label>
          <textarea id="contents" type="text" rows="5" />
          <p class="validation-text warning">
            Contents length must be less than 250
          </p>
        </div>
        <button type="submit" class="btn">Create</button>
      </form>
      <p class="log"></p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.form-wrapper .form {
  width: 100%;
}

.btn {
  color: white;
}
</style>
