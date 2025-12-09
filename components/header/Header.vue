<template>
  <div class="header">
    <HeaderWeb :items="menuItems"/>
    <HeaderMobile/>
  </div>
</template>

<script setup>
  const menuItems = [
    { label: 'Главная',
      route: '/'
    },
    { label: 'Преимущества',
      route: 'power'
    },
    { label: 'Связаться',

    },
    { label: '8-999-99-99',
      route: '/'
    }
  ]

</script>


<style scoped>
  .header {
    /* background-color: blueviolet; */
    /* width: 215px; */
    /* height: 200px; */
  }
</style>