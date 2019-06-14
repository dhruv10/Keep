<template>
  <div class="sidebar"> 
    <aside class="menu sidebar-width border-sidebar">
      <div class="padding ">
        <ul class="menu-list">
          <li>
            <a>Notes</a>
          </li>
          <li>
            <a>Reminder</a>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.padding {
  padding: 20px;
}
.sidebar-width{
    width: 20%;
}
.sidebar{
    width: 10%;
    position: absolute;
    display:inline-block;
    margin-right:10px;
}
.border-sidebar{
    border-bottom: 2px solid lightgrey;
    width: 100%;
}
</style>
