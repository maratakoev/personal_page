<template>
  <div class="approach__wrapper">
    <div class="approach__content">
      <h2>Мы не начинаем без стратегии: Наш экспертный подход</h2>
      <p class="approach__subtitle">
        Мы не просто пишем код. Мы анализируем вашу нишу, чтобы создать цифровой актив, который гарантированно работает на ваши бизнес-цели.
      </p>

      <div class="approach__grid">
        
        <div class="approach__unit">
          <div class="approach__icon-circle" style="background-color: #3498db;">
            <i class="fas fa-sitemap"></i> 
          </div>
          <h3>1. Глубокая Аналитика и Стратегия</h3>
          <p class="unit__description">
            Мы изучаем 5-7 ваших прямых конкурентов, выявляем их сильные стороны и ошибки. Определяем ключевые *боли* и *мотивации* вашей целевой аудитории. Результат — **Техническое Задание (ТЗ)**, которое минимизирует риски.
          </p>
        </div>

        <div class="approach__unit">
          <div class="approach__icon-circle" style="background-color: #2ecc71;">
            <i class="fas fa-drafting-compass"></i> 
          </div>
          <h3>2. Проектирование UX/UI</h3>
          <p class="unit__description">
            Прежде чем тратить время на дизайн, мы создаем **логический, кликабельный прототип (Wireframe)**. Вы увидите архитектуру и расположение ключевых элементов навигации и конверсии, **до начала кодирования**.
          </p>
        </div>

        <div class="approach__unit">
          <div class="approach__icon-circle" style="background-color: #f39c12;">
            <i class="fas fa-chart-area"></i> 
          </div>
          <h3>3. Разработка и Метрики</h3>
          <p class="unit__description">
            Мы не просто пишем чистый код, мы сразу интегрируем инструменты **аналитики (Google Analytics/Яндекс.Метрика)** и **CRM-системы**. Ваш сайт готов к запуску рекламы и отслеживанию **ROI** с первого дня.
          </p>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script setup>
// Здесь нет реактивных данных, поэтому блок остается пустым
</script>

<style scoped>
/* ======================================= */
/* 1. Общая Структура и Контейнер */
/* ======================================= */
.approach__wrapper {
  background-color: #ffffff; /* Белый фон */
  padding: 80px 0;
}
.approach__content {
  max-width: 1100px;
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
.approach__subtitle {
    font-size: 18px;
    color: #7f8c8d;
    margin-bottom: 50px;
    max-width: 800px;
}

/* ======================================= */
/* 2. Сетка (Grid) для 3 Столпов */
/* ======================================= */
.approach__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 30px; 
  width: 100%;
}

/* ======================================= */
/* 3. Стиль Карточки (.approach__unit) */
/* ======================================= */
.approach__unit {
    text-align: left;
    padding: 20px;
    border-radius: 10px;
}

.approach__unit h3 {
    font-size: 20px;
    color: #2c3e50;
    margin-top: 15px;
    margin-bottom: 10px;
    font-weight: 600;
}

.unit__description {
    font-size: 16px;
    color: #666;
    line-height: 1.6;
}

/* Иконка в круге */
.approach__icon-circle {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
}
.approach__icon-circle .fas {
    font-size: 28px;
    color: white;
}

/* ======================================= */
/* 4. Адаптивность */
/* ======================================= */
@media (max-width: 992px) {
  .approach__grid {
    grid-template-columns: 1fr; /* Одна колонка на планшетах/мобильных */
  }
  .approach__unit {
    text-align: center; /* Центруем контент */
    padding: 20px 0;
  }
  .approach__icon-circle {
    margin: 0 auto 15px auto; /* Центруем иконку */
  }
  h2 {
    font-size: 26px;
  }
}
</style>