<template>
  
    
      <div class="skills">
        <h2 class="skills__title">В разработке использую</h2>
        <div class="skills__logos">
          <div class="skills__item">
            <img class="skills__icon" alt="JavaScript" src="/public/images/js.png"/>
            <span class="skills__name">
              JavaScript
            </span>
          </div>
          <div class="skills__item">
            <img class="skills__icon" alt="Vue" src="/public/images/vue.png"/>
            <span class="skills__name">
              Vue 3
            </span>
          </div>
          <!-- <div class="skills__item">
            <img class="skills__icon" alt="Telegram" src="/public/images/tg.png"/>
            <span class="skills__name">
              Telegram
            </span>
          </div> -->
          <div class="skills__item">
            <img class="skills__icon" alt="Figma" src="/public/images/figma.png"/>
            <span class="skills__name">
              Figma
            </span>
          </div>
          <div class="skills__item">
            <img class="skills__icon" alt="Mongo" src="/public/images/mongo.png"/>
            <span class="skills__name">
              Mongo
            </span>
          </div>
        </div>
      </div>
    
  
</template>

<script setup>

</script>

<style scoped>
  /* .skills__wrapper {
    background-color: rgba(237, 247, 250, 1);
    width: 100%;
    height: 400px;
  }
  .skills__content {
    max-width: 1200px;
    margin: 0 auto;
  } */
  .skills {
    max-width: 500px;
    height: 170px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    background-color: rgb(248, 189, 147);
    margin-top: -60px;
    border-radius: 30px;

  }
  .skills__logos {
    display: flex;
    gap: 15px;
  }
  .skills__item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>