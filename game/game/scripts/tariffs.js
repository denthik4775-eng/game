// Модальные окна
const bookingModal = document.getElementById("booking-modal");
const successModal = document.getElementById("success-modal");
const modalOverlay = document.getElementById("modal-overlay");
const closeBookingModal = document.getElementById("close-booking-modal");
const closeSuccessModal = document.getElementById("close-success-modal");
const bookButtons = document.querySelectorAll(".book-button");
const bookingForm = document.getElementById("booking-form");
const tariffInput = document.getElementById("tariff");

// Функция для открытия модального окна
function openModal(modal) {
  modal.style.display = "block";
  modalOverlay.style.display = "block";
}

// Функция для закрытия модального окна
function closeModal(modal) {
  modal.style.display = "none";
  modalOverlay.style.display = "none";
}

// Открытие модального окна для бронирования
bookButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const tariff = button.getAttribute("data-tariff");
    tariffInput.value = tariff; // Устанавливаем тариф в поле
    openModal(bookingModal);
  });
});

// Закрытие модальных окон при клике на кнопку "×"
closeBookingModal.addEventListener("click", () => closeModal(bookingModal));
closeSuccessModal.addEventListener("click", () => closeModal(successModal));

// Закрытие модальных окон при клике на оверлей
modalOverlay.addEventListener("click", () => {
  closeModal(bookingModal);
  closeModal(successModal);
});

// Закрытие модальных окон при нажатии клавиши Esc
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal(bookingModal);
    closeModal(successModal);
  }
});

// Обработка формы бронирования
bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  closeModal(bookingModal);
  openModal(successModal);
});
