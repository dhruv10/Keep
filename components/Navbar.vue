<template>
  <nav class="navbar navbar-main-div" role="navigation" aria-label="main navigation">
    <div class="navbar-brand flex">
      <a class="navbar-item" href="#">
        <img
          src="https://www.droid-life.com/wp-content/uploads/2015/03/google-keep-logo.jpg"
          alt="Bulma: Free, open source, &amp; modern CSS framework based on Flexbox"
          width="82"
          height="148"
        >
        <span class="keep">Keep</span>
      </a>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style scoped>
.navbar-main-div {
  border-bottom: 2px solid lightgrey;
  height: 75px;
}
.keep {
  display: inline-block;
  font-family: 'Product Sans', Arial, sans-serif;
  font-size: 22px;
  line-height: 24px;
  padding-left: 8px;
  position: relative;
  top: -1.5px;
  vertical-align: middle;
  color: #5f6368;
  opacity: 1;
  cursor: pointer;
}
</style>
