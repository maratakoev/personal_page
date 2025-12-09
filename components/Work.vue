<template>
  <div class="process__wrapper">
    <div class="process__content">
      <h2>Прозрачность процесса: 5 этапов создания вашего цифрового актива</h2>
      <p class="process__subtitle">
        Мы делим всю работу на контролируемые шаги. Вы всегда знаете, что происходит, когда и за что вы платите.
      </p>

      <div class="process__steps">
        
        <div class="step">
          <div class="step__number" style="background-color: #3498db;">1</div>
          <div class="step__details">
            <h3>Аналитика и Техническое Задание (ТЗ)</h3>
            <p>Глубокое погружение в нишу, анализ конкурентов, определение УТП и целевой аудитории. Результат: **Детальное ТЗ и фиксированная смета.**</p>
          </div>
        </div>

        <div class="step">
          <div class="step__number" style="background-color: #2ecc71;">2</div>
          <div class="step__details">
            <h3>UX/UI Проектирование и Дизайн</h3>
            <p>Создание кликабельного прототипа (Wireframe) и утверждение финального дизайн-макета. Результат: **Полностью готовый дизайн (макеты) и логика.**</p>
          </div>
        </div>

        <div class="step">
          <div class="step__number" style="background-color: #f39c12;">3</div>
          <div class="step__details">
            <h3>Front-end и Back-end Разработка</h3>
            <p>Чистая вёрстка, интеграция функционала, подключение CMS, CRM и всех необходимых сервисов. Результат: **Функциональная бета-версия на тестовом домене.**</p>
          </div>
        </div>

        <div class="step">
          <div class="step__number" style="background-color: #e74c3c;">4</div>
          <div class="step__details">
            <h3>Тестирование и Финальный Запуск</h3>
            <p>Кроссбраузерное тестирование, проверка на мобильных, оптимизация скорости загрузки (Google PageSpeed). Результат: **Запущенный, оптимизированный сайт на вашем домене.**</p>
          </div>
        </div>
        
        <div class="step">
          <div class="step__number" style="background-color: #9b59b6;">5</div>
          <div class="step__details">
            <h3>Поддержка и Обучение</h3>
            <p>Передача всех доступов, обучение вашего персонала работе с CMS, предоставление 6 месяцев гарантии на код. Результат: **Вы — полноправный владелец готового, работающего продукта.**</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
// Здесь нет реактивных данных
</script>

<style scoped>
/* ======================================= */
/* 1. Общая Структура и Контейнер */
/* ======================================= */
.process__wrapper {
  background-color: #f7f9fc; /* Светлый фон для контраста */
  padding: 80px 0;
}
.process__content {
  max-width: 900px;
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
.process__subtitle {
    font-size: 18px;
    color: #7f8c8d;
    margin-bottom: 60px;
}

/* ======================================= */
/* 2. Стиль Шага (Step) */
/* ======================================= */
.process__steps {
    width: 100%;
    /* Используем flex для вертикального расположения шагов с разделителем */
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.step {
    display: flex;
    align-items: flex-start;
    text-align: left;
    position: relative;
    padding-bottom: 40px; /* Пространство для вертикальной линии */
}

/* Вертикальная линия-разделитель между шагами */
.step:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 55px; /* Начинается ниже круга */
    left: 28px;
    width: 2px;
    height: calc(100% - 40px);
    background-color: #ecf0f1;
    z-index: 1;
}

.step:last-child {
    padding-bottom: 0; /* Убираем лишний отступ у последнего элемента */
}

/* Круг с номером шага */
.step__number {
    width: 56px;
    height: 56px;
    min-width: 56px; /* Фиксированная ширина */
    border-radius: 50%;
    color: white;
    font-size: 24px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2; /* Поверх линии */
    box-shadow: 0 0 0 8px #f7f9fc; /* Фон вокруг круга */
}

.step__details {
    margin-left: 25px;
}

.step__details h3 {
    font-size: 22px;
    color: #2c3e50;
    margin-top: 0;
    margin-bottom: 8px;
    font-weight: 600;
}

.step__details p {
    font-size: 16px;
    color: #666;
    line-height: 1.6;
}

/* ======================================= */
/* 3. Адаптивность */
/* ======================================= */
@media (max-width: 600px) {
    h2 {
        font-size: 26px;
    }
    .step__number {
        width: 45px;
        height: 45px;
        min-width: 45px;
        font-size: 20px;
    }
    .step:not(:last-child)::after {
        top: 45px;
        left: 21px;
    }
    .step__details {
        margin-left: 15px;
    }
    .step__details h3 {
        font-size: 18px;
    }
    .step__details p {
        font-size: 15px;
    }
}
</style>