<template>
  <div class="projects__wrapper">
    <div class="projects__content">
      <h2>Какой тип сайта вам нужен?</h2>
      
      <div class="projects__grid">
        
        <div class="projects__unit" 
             v-for="(type, index) in siteTypes" 
             :key="index"
             :style="{ borderTop: '4px solid ' + type.color }"
        >
          
          <div class="projects__header">
            <i :class="['fas', type.icon, 'projects__icon']" :style="{ color: type.color }"></i>
            <h3 class="projects__title">{{ type.title }}</h3>
          </div>
          
          <div class="projects__description">
            <div class="description__goal">
              <h4>🎯 Главная цель:</h4>
              <p>{{ type.goal }}</p>
            </div>
            <div class="description__fits">
              <h4>✅ Кому подходит:</h4>
              <p>{{ type.fits }}</p>
            </div>
            
            <a href="#" class="projects__cta" :style="{ backgroundColor: type.color }">
              Обсудить этот тип
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const siteTypes = computed(() => [
  {
    icon: 'fa-rocket',
    title: 'Лендинг (Landing Page)',
    goal: 'Сверхбыстрый сбор заявок и тестирование рекламных гипотез.',
    fits: 'Стартапы, владельцы одного продукта/услуги, рекламные кампании.',
    color: '#e74c3c' 
  },
  {
    icon: 'fa-building',
    title: 'Многостраничный Сайт',
    goal: 'Создание имиджа эксперта, демонстрация полного спектра услуг и структуры.',
    fits: 'B2B-компании, юридические, строительные и консалтинговые фирмы.',
    color: '#3498db' 
  },
  {
    icon: 'fa-cart-shopping',
    title: 'Интернет-Магазин (E-commerce)',
    goal: 'Автоматизация продаж, масштабирование ассортимента и уход от маркетплейсов.',
    fits: 'Розничные сети, оптовые поставщики, производители товаров.',
    color: '#2ecc71' 
  },
  {
    icon: 'fa-box',
    title: 'Сайт-Каталог / Витрина',
    goal: 'Презентация широкого ассортимента сложных или дорогих товаров без онлайн-оплаты.',
    fits: 'Компании со сложным оборудованием, оптовые базы, автосалоны.',
    color: '#f39c12' 
  },
  {
    icon: 'fa-user-lock',
    title: 'Корпоративный Портал',
    goal: 'Повышение внутренней эффективности, автоматизация HR и документооборота.',
    fits: 'Крупные компании, организации с большим штатом (внутренняя система).',
    color: '#9b59b6' 
  },
]);
</script>

<style scoped>
/* ======================================= */
/* 1. Общая Структура и Контейнер */
/* ======================================= */
.projects__wrapper {
  background-color: #fcfcfc; 
  padding: 80px 0;
  width: 100%;
}
.projects__content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h2 {
  font-size: 32px;
  margin-bottom: 50px;
  color: #2c3e50;
  font-weight: 700;
}

/* ======================================= */
/* 2. Сетка (Grid): 3 колонки */
/* ======================================= */
.projects__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 30px; 
  width: 100%;
  
  /* Центрирует 4-й и 5-й элементы во втором ряду */
  justify-content: center; 
}

/* ======================================= */
/* 3. Карточка (Unit) */
/* ❌ Эффекты наведения (hover) удалены */
/* ======================================= */
.projects__unit {
  grid-column: span 1; 
  border-radius: 14px;
  background-color: #ffffff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  /* Убраны transition и :hover */
}

/* ======================================= */
/* 4. Блок Заголовка и Иконки (Header) */
/* ======================================= */
.projects__header {
  padding: 25px 20px;
  background-color: #f8f8f8;
  display: flex;
  align-items: center;
  gap: 15px;
  border-bottom: 1px solid #eee;
}

.projects__icon {
  font-size: 30px;
  /* Динамический цвет устанавливается через v-bind style */
}

.projects__title {
  font-size: 18px;
  color: #2c3e50;
  margin: 0;
  font-weight: 600;
}

/* ======================================= */
/* 5. Блок Описания и CTA */
/* ======================================= */
.projects__description {
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 100%; 
}

.description__goal,
.description__fits {
  margin-bottom: 20px;
}

.projects__description h4 {
  font-size: 14px;
  color: #555;
  font-weight: 700;
  margin-bottom: 5px;
  text-transform: uppercase;
}

.projects__description p {
  font-size: 16px;
  line-height: 1.5;
  color: #666;
  margin: 0;
}

.projects__cta {
  display: block;
  text-align: center;
  color: #fff;
  padding: 12px 15px;
  border-radius: 8px;
  margin-top: auto; /* Прижимает кнопку к низу */
  font-weight: 600;
  text-decoration: none;
  /* Убраны transition и :hover */
}

/* ======================================= */
/* 6. Адаптивность */
/* ======================================= */

/* Планшеты (Tablet): 2 колонки */
@media (max-width: 992px) { 
  .projects__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

/* Мобильные (Mobile): 1 колонка */
@media (max-width: 600px) {
  .projects__grid {
    grid-template-columns: 1fr; 
    gap: 30px;
  }
  .projects__wrapper {
    padding: 50px 0;
  }
  h2 {
    font-size: 26px;
    margin-bottom: 30px;
  }
}
</style>