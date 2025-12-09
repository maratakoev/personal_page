<template>
  <footer class="main-footer__wrapper">
    <div class="main-footer__content">
      
      <div class="footer__column footer__branding">
        <h3 class="footer__logo">Ваша Студия</h3>
        <p class="footer__slogan">
          Разработка сайтов, основанная на бизнес-аналитике и конверсии.
        </p>
        <p class="footer__copy">
          © {{ currentYear }} Ваша Студия. Все права защищены.
        </p>
      </div>

      <div class="footer__column footer__links">
        <h4>Навигация</h4>
        <ul>
          <li><a href="#hero">Главная</a></li>
          <li><a href="#problems">Проблемы и Решения</a></li>
          <li><a href="#types">Типы Сайтов</a></li>
          <li><a href="#approach">Наш Подход</a></li>
          <li><a href="#process">Этапы Работы</a></li>
          <li><a href="#guarantees">Гарантии</a></li>
        </ul>
      </div>

      <div class="footer__column footer__contacts">
        <h4>Контакты</h4>
        <p>Email: <a href="mailto:info@yourstudio.com">info@yourstudio.com</a></p>
        <p>Телефон: <a href="tel:+74951234567">+7 (495) 123-45-67</a></p>
        
        <div class="footer__socials">
          <a href="#" aria-label="Telegram"><i class="fab fa-telegram-plane"></i></a>
          <a href="#" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
          <a href="#" aria-label="VKontakte"><i class="fab fa-vk"></i></a>
        </div>
      </div>
    </div>
    
    <div class="footer__bottom-bar">
        <a href="#">Политика конфиденциальности</a>
        <a href="#">Публичная оферта</a>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
/* ======================================= */
/* 1. Общая Структура и Контейнер */
/* ======================================= */
.main-footer__wrapper {
  background-color: #34495e; /* Темный фон для контраста */
  color: #ecf0f1;
  padding-top: 50px;
  width: 100%;
}
.main-footer__content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  border-bottom: 1px solid #496277;
}

/* ======================================= */
/* 2. Стиль Колонок */
/* ======================================= */
.footer__column h4 {
  font-size: 18px;
  color: #ffffff;
  margin-bottom: 20px;
  font-weight: 600;
  text-transform: uppercase;
}

/* Колонка Брендинга */
.footer__branding {
    font-size: 16px;
}
.footer__logo {
    font-size: 24px;
    font-weight: 700;
    color: #2ecc71; /* Акцентный цвет */
    margin-bottom: 10px;
}
.footer__slogan {
    margin-bottom: 20px;
    color: #bdc3c7;
}
.footer__copy {
    font-size: 14px;
    color: #7f8c8d;
}

/* Колонка Ссылок (Навигация) */
.footer__links ul {
    list-style: none;
    padding: 0;
    margin: 0;
}
.footer__links li {
    margin-bottom: 8px;
}
.footer__links a {
    color: #bdc3c7;
    text-decoration: none;
    font-size: 16px;
    transition: color 0.2s;
}
.footer__links a:hover {
    color: #ffffff;
}

/* Колонка Контактов */
.footer__contacts p {
    margin-bottom: 10px;
}
.footer__contacts a {
    color: #bdc3c7;
    text-decoration: none;
    transition: color 0.2s;
}
.footer__contacts a:hover {
    color: #2ecc71;
}

/* Социальные сети */
.footer__socials {
    margin-top: 20px;
    display: flex;
    gap: 15px;
}
.footer__socials a {
    color: #bdc3c7;
    font-size: 24px;
}
.footer__socials a:hover {
    color: #ffffff;
}

/* ======================================= */
/* 3. Нижний бар (Юридические ссылки) */
/* ======================================= */
.footer__bottom-bar {
    padding: 15px 20px;
    max-width: 1200px;
    margin: 0 auto;
    text-align: right;
}
.footer__bottom-bar a {
    color: #bdc3c7;
    font-size: 14px;
    text-decoration: none;
    margin-left: 20px;
    transition: color 0.2s;
}
.footer__bottom-bar a:hover {
    color: #ffffff;
}


/* ======================================= */
/* 4. Адаптивность */
/* ======================================= */
@media (max-width: 768px) {
  .main-footer__content {
    grid-template-columns: 1fr; /* Одна колонка на мобильных */
    gap: 30px;
    text-align: center;
  }
  .footer__logo, .footer__slogan, .footer__copy, .footer__column h4 {
      text-align: center;
  }
  .footer__links ul {
      text-align: center;
  }
  .footer__socials {
      justify-content: center;
  }
  .footer__bottom-bar {
      text-align: center; /* Центруем юридические ссылки */
  }
  .footer__bottom-bar a {
      display: block;
      margin: 5px 0;
  }
}
</style>