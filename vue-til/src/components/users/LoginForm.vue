<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form class="form">
        <div>
          <label for="username">id:</label>
          <input id="username" type="text" />
          <p class="validation-text">
            <span class="warning"> Please enter an email address </span>
          </p>
        </div>
        <div>
          <label for="password">pw:</label>
          <input id="password" type="text" />
        </div>
        <button type="submit" class="btn">로그인</button>
      </form>
      <p class="log"></p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.btn {
  color: white;
}
</style>
