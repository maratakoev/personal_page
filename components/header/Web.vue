<template>
  <div class="header ">
    <div class="header__content">
      <nav class="header__nav">
        <router-link to="/">
          <img
            src="/public/images/logo.png"
            alt=""
            class="header__logo"
            />
          </router-link>
        <router-link
          v-for="(item, index) in items"
          :key="index"
          :to="item.route"
          class="header__link"
        >
        {{ item.label }}
        </router-link>
      </nav>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps ({
    items: {
      type: Array,
      required: true,
      default: ()=> []
    }
  })


</script>

<style scoped>
  .header {
    padding: 15px;
    background-color: rgb(243, 243, 243);
    max-width: 100%;
  }
  .header__content {
    max-width: 1200px;
    margin: 0 auto;
  }

  .header__nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header__link{
    text-decoration: none;
    color: rgba(33, 36, 61, 1);
    -webkit-tap-highlight-color: transparent;
  }
  .header__link:hover {
    color: yellow;
  }

  .header__logo {
    width: 150px;
    margin-right: 240px;
  }

</style>