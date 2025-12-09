<template>
  <div class="mobileMenu">
    mobile menu
  </div>
</template>

<script setup>

</script>

<style scoped>
  .mobileMenu {
    padding: 10px;
    background-color: chocolate;
    width: 50px;
    margin-top: 40px;
    height: 50px;
    z-index: 5;
  }
  @media  (min-width: 450px) {
    .mobileMenu {
      display: none;
    }
  }


</style>