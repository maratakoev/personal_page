<template>
  <div class="solution__wrapper">
    <div class="solution__content">
      <h2>8 проблем, которые мы решаем наличием сайта</h2>
      
      <div class="solution__grid">
        
        <div 
          class="solution__unit" 
          v-for="(item, index) in problems" 
          :key="index"
          :style="{ '--accent-color': item.accentColor }"
        >
          <div class="solution__pain-zone">
            <div class="solution__icon-circle">
              <i :class="['fas', item.icon]"></i> 
            </div>
            <h3 class="solution__title">{{ item.title }}</h3>
            <p class="solution__pain-text">{{ item.pain }}</p>
          </div>
          
          <div class="solution__resolution-zone">
            <div class="resolution__label">Решение:</div>
            <p>{{ item.solution }}</p>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const problems = computed(() => [
  {
    icon: 'fa-handshake-slash', 
    title: 'Стратегическая Зависимость',
    pain: 'Вы платите комиссии, не контролируете правила и не владеете клиентской базой.',
    solution: 'Собственный Канал Продаж: Владейте контактами и устанавливайте свои правила.',
    accentColor: '#e74c3c' 
  },
  {
    icon: 'fa-chart-line', 
    title: 'Неэффективный Рекламный Бюджет',
    pain: 'Вы не можете точно измерить ROI и понять, какая реклама приносит прибыль.',
    solution: 'Точная Аналитика: Полная интеграция с рекламными системами для оптимизации расходов.',
    accentColor: '#2ecc71' 
  },
  {
    icon: 'fa-headset', 
    title: 'Потеря "Горячих" Клиентов 24/7',
    pain: 'Клиенты уходят, если не дозвонились или обращение произошло вне рабочего времени.',
    solution: 'Круглосуточный Лидогенератор: Онлайн-заявки и чат-боты, работающие 24/7.',
    accentColor: '#f39c12' 
  },
  {
    icon: 'fa-magnifying-glass-chart', 
    title: 'Невозможность Убедительно Представить Ценность',
    pain: 'Сложные услуги невозможно доходчиво объяснить в рамках постов или коротких объявлений.',
    solution: 'Мультимедийная Архитектура: Инфографика, чертежи, схемы и анимация для убедительной презентации.',
    accentColor: '#3498db' 
  },
  {
    icon: 'fa-star-half-stroke', 
    title: 'Разрозненность Отзывов и Доверия',
    pain: 'Клиенту сложно убедиться в вашей надежности, так как отзывы разбросаны по разным площадкам.',
    solution: 'Централизованный Хаб Доверия: Упорядоченные отзывы, кейсы и благодарственные письма в одном месте.',
    accentColor: '#9b59b6' 
  },
  {
    icon: 'fa-funnel-dollar', 
    title: 'Низкое Качество Заявок',
    pain: 'Менеджеры тратят время на нецелевых клиентов, которые "просто спросили".',
    solution: 'Квалификация Лидов: Внедрение умных форм, квизов и калькуляторов для сбора данных.',
    accentColor: '#1abc9c' 
  },
  {
    icon: 'fa-map-location-dot', 
    title: 'Клиент "теряется" или не доезжает',
    pain: 'Потенциальные клиенты сдаются, если им сложно найти ваш офис или магазин.',
    solution: 'Интерактивные Карты: Внедрение Яндекс.Карт с прокладкой маршрута в один клик.',
    accentColor: '#7f8c8d' 
  },
  {
    icon: 'fa-eye', 
    title: 'Отсутствие Контроля и Прозрачности',
    pain: 'Продажи "вслепую": вы не видите, сколько денег принес сайт, и не можете планировать.',
    solution: 'Сквозная Интеграция с CRM: Все заявки и действия клиента автоматически попадают в CRM.',
    accentColor: '#e67e22' 
  },
]);
</script>

<style scoped>
/* ======================================= */
/* 1. Общая Структура и Контейнер */
/* ======================================= */
.solution__wrapper {
  background-color: #f7f9fc; 
  padding: 80px 0;
}

.solution__content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

h2 {
  font-size: 32px;
  margin-bottom: 50px;
  color: #2c3e50;
  font-weight: 700;
}

/* ======================================= */
/* 2. Сетка (Grid) для Карточек */
/* ======================================= */
.solution__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 25px; 
  width: 100%;
}

@media (max-width: 1024px) {
  .solution__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 600px) {
  .solution__grid {
    grid-template-columns: 1fr;
  }
}

/* ======================================= */
/* 3. Стиль Карточки (.solution__unit) */
/* ❌ Эффекты наведения (hover) удалены */
/* ======================================= */
.solution__unit {
    background-color: white;
    border-radius: 14px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    overflow: hidden; 
    display: flex; 
    flex-direction: column;
    height: 100%; 
    text-align: left;
}

/* 🟥 Зона 1: ПРОБЛЕМА (Темный/Акцентный фон) */
.solution__pain-zone {
    background-color: #34495e; 
    color: white;
    padding: 30px 20px 20px 20px;
    border-radius: 14px 14px 0 0; 
    flex-grow: 1; 
}

.solution__title {
    font-size: 18px;
    margin-top: 10px;
    color: white;
    font-weight: 600;
}

.solution__pain-text {
    font-size: 14px;
    color: #bdc3c7; 
    margin-top: 8px;
    line-height: 1.4;
}

/* Иконка в круге */
.solution__icon-circle {
    width: 45px;
    height: 45px;
    /* Цвет берется из JS props: item.accentColor */
    background-color: var(--accent-color); 
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.solution__icon-circle .fas {
    font-size: 20px;
    color: white;
}

/* 🟢 Зона 2: РЕШЕНИЕ (Светлый/Контрастный фон) */
.solution__resolution-zone {
    background-color: #ecf0f1; 
    padding: 20px;
    /* Линия берется из JS props: item.accentColor */
    border-top: 3px solid var(--accent-color); 
}

.resolution__label {
    font-size: 12px;
    font-weight: bold;
    color: #2c3e50; 
    margin-bottom: 5px;
    text-transform: uppercase;
}

.solution__resolution-zone p {
    font-size: 14px;
    color: #2c3e50;
    font-weight: 500;
    line-height: 1.3;
}
</style>