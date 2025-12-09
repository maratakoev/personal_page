<template>
  <div class="guarantee__wrapper">
    <div class="guarantee__content">
      <h2>Снимаем риски: Вы защищены договором и гарантией</h2>
      <p class="guarantee__subtitle">
        Мы ценим прозрачность и несем ответственность за результат. Мы гарантируем качество, сроки и соответствие утвержденному бюджету.
      </p>

      <div class="guarantee__grid">
        
        <div class="guarantee__unit">
          <i class="fas fa-file-invoice-dollar guarantee__icon" style="color: #e74c3c;"></i>
          <h3>Фиксация Сметы и Цены</h3>
          <p>Цена, зафиксированная в договоре, **не изменится**. Вы защищены от скрытых доплат и непредвиденного роста бюджета в процессе работы.</p>
        </div>

        <div class="guarantee__unit">
          <i class="fas fa-stopwatch guarantee__icon" style="color: #f39c12;"></i>
          <h3>Ответственность за Сроки</h3>
          <p>Мы прописываем реальные сроки в договоре. За каждый день просрочки по нашей вине мы выплачиваем **неустойку**, прописанную в контракте.</p>
        </div>
        
        <div class="guarantee__unit">
          <i class="fas fa-shield-alt guarantee__icon" style="color: #2ecc71;"></i>
          <h3>6 Месяцев Гарантии на Код</h3>
          <p>В течение шести месяцев после запуска мы **бесплатно устраняем любые ошибки** и баги, связанные с нашей разработкой. Вы получаете чистый, работающий продукт.</p>
        </div>

      </div>
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
.guarantee__wrapper {
  background-color: #fcfcfc;
  padding: 80px 0;
}
.guarantee__content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
h2 {
  font-size: 32px;
  margin-bottom: 15px;
  color: #2c3e50;
  font-weight: 700;
}
.guarantee__subtitle {
    font-size: 18px;
    color: #7f8c8d;
    margin-bottom: 50px;
    max-width: 700px;
}

/* ======================================= */
/* 2. Сетка (Grid) для 3 Гарантий */
/* ======================================= */
.guarantee__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 30px; 
  width: 100%;
}

/* ======================================= */
/* 3. Стиль Карточки (.guarantee__unit) */
/* ======================================= */
.guarantee__unit {
    text-align: center;
    padding: 30px 20px;
    border-radius: 10px;
    background-color: #ffffff;
    border: 1px solid #eee;
    height: 100%;
}

.guarantee__icon {
    font-size: 40px;
    margin-bottom: 15px;
}

.guarantee__unit h3 {
    font-size: 20px;
    color: #2c3e50;
    margin-bottom: 10px;
    font-weight: 600;
}

.guarantee__unit p {
    font-size: 16px;
    color: #666;
    line-height: 1.6;
}

/* ======================================= */
/* 4. Адаптивность */
/* ======================================= */
@media (max-width: 992px) {
  .guarantee__grid {
    grid-template-columns: repeat(2, 1fr); 
  }
}
@media (max-width: 600px) {
  .guarantee__grid {
    grid-template-columns: 1fr;
  }
  h2 {
    font-size: 26px;
  }
}
</style>