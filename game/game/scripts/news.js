// Модальные окна новостей
const newsBlocks = document.querySelectorAll(".news-block");
const modal = document.getElementById("news-modal");
const modalTitle = document.getElementById("modal-title");
const modalContent = document.getElementById("modal-content");
const modalClose = document.getElementById("modal-close");
const modalOverlay = document.getElementById("modal-overlay");

// Данные для новостей
const newsData = {
  1: {
    title: "Обновление ПК",
    content:
      "Мы обновили наши компьютеры до последних моделей! Теперь вы можете наслаждаться играми на самых мощных устройствах с топовыми видеокартами и процессорами. Это обновление сделает ваш игровой опыт ещё более захватывающим!",
  },
  2: {
    title: "Скидки на тарифы",
    content:
      "Скидки до 50% на тарифы для компаний из 5 и более человек! Приходите с друзьями и наслаждайтесь играми по выгодным ценам. Акция действует до конца месяца, не упустите шанс!",
  },
};

// Функция для открытия модального окна
function openModal() {
  modal.style.display = "block";
  modalOverlay.style.display = "block";
}

// Функция для закрытия модального окна
function closeModal() {
  modal.style.display = "none";
  modalOverlay.style.display = "none";
}

// Открытие модального окна при клике на новость
newsBlocks.forEach((block) => {
  block.addEventListener("click", () => {
    const newsId = block.getAttribute("data-news");
    if (newsData[newsId]) {
      modalTitle.textContent = newsData[newsId].title;
      modalContent.textContent = newsData[newsId].content;
      openModal();
    }
  });
});

// Закрытие модального окна при клике на кнопку "×"
modalClose.addEventListener("click", closeModal);

// Закрытие модального окна при клике на оверлей
modalOverlay.addEventListener("click", closeModal);

// Закрытие модального окна при нажатии клавиши Esc
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});
