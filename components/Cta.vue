<template>
  <div class="cta__wrapper">
    <div class="cta__content">
      
      <i class="fas fa-hand-point-right cta__hand-icon"></i>
      <h2>
        Оставьте заявку и получите **бесплатный аудит** <br>ваших 3-х главных конкурентов!
      </h2>
      
      <p class="cta__text">
        Мы проанализируем, как они работают, и покажем, какие элементы конверсии можно применить для вашего сайта. Это — первый шаг к стратегии!
      </p>

      <form class="cta__form">
        <input type="text" placeholder="Ваше имя" required>
        <input type="email" placeholder="Email или телефон" required>
        <button type="submit">Получить аудит и стратегию</button>
      </form>
      
      <small class="cta__privacy">Нажимая кнопку, вы соглашаетесь с обработкой персональных данных. Мы не рассылаем спам.</small>
      
    </div>
  </div>
</template>

<script setup>
// Статичный компонент
</script>

<style scoped>
/* ======================================= */
/* 1. Общая Структура и Контейнер */
/* ======================================= */
.cta__wrapper {
  background-color: #2c3e50; /* Темный, контрастный фон */
  padding: 80px 0;
}
.cta__content {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: white;
}

.cta__hand-icon {
    font-size: 40px;
    color: #f39c12; /* Оранжевый акцент */
    margin-bottom: 20px;
}

h2 {
  font-size: 38px;
  margin-bottom: 20px;
  color: white;
  font-weight: 700;
  line-height: 1.2;
}
.cta__text {
    font-size: 18px;
    color: #bdc3c7;
    margin-bottom: 30px;
}

/* ======================================= */
/* 2. Стиль Формы */
/* ======================================= */
.cta__form {
    display: flex;
    gap: 15px;
    width: 100%;
    justify-content: center;
    max-width: 700px;
    margin-bottom: 15px;
}

.cta__form input {
    padding: 15px 20px;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    flex-grow: 1;
}

.cta__form button {
    padding: 15px 30px;
    background-color: #2ecc71; /* Зеленый акцент для CTA */
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    transition: background-color 0.3s;
}

.cta__form button:hover {
    background-color: #27ae60;
}

.cta__privacy {
    font-size: 12px;
    color: #7f8c8d;
}

/* ======================================= */
/* 3. Адаптивность Формы */
/* ======================================= */
@media (max-width: 768px) {
  .cta__form {
    flex-direction: column;
    gap: 10px;
  }
}
@media (max-width: 600px) {
  h2 {
    font-size: 28px;
  }
}
</style>