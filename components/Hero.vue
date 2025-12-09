<template>
  <div class="hero">
    <div class="hero__content">
      <div class="hero__direction">
        <div class="hero__discription">
          <h1>Создание и продвижение сайтов.</h1>
          <h2>Современные, функциональные сайты обеспечат стабильный поток клиентов.</h2>
          <button class="btn">Оставить заявку</button>
        </div>
        <div class="hero__image-wrapper">
          <img class="hero__image" src="/images/ava.png" alt="Profile Avatar">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
  .hero {
    width: 100%;
    height: 500px;
    background-color: rgb(243, 243, 243);
    display: flex;
    align-items: center;
  }

  .hero__content {
    max-width: 1200px;
    margin: 0 auto;
  }

  .hero__direction {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .hero__discription {
    max-width: 50%;
  }

  .hero__image-wrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .hero__image {
    max-width: 250px;
    border-radius: 130px;
  }

  .btn {
    background-color: rgba(255, 100, 100, 1);
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 3px;
  }

</style>