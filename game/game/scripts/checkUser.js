// Список пользователей с именами, паролями и данными
const users = {
  shrek: { password: "123", hours: 120, tariff: "Премиум", info: "Вы являетесь нашим постоянным клиентом!" },
  fiona: { password: "456", hours: 80, tariff: "Стандарт", info: "Вы любите играть в командные игры!" },
  donkey: { password: "789", hours: 50, tariff: "Особая комната", info: "Вы предпочитаете VR-игры и XBOX!" },
};

// Обработчик формы
document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Отключаем стандартное поведение формы

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMessage = document.getElementById("errorMessage");

  // Проверка имени пользователя
  if (!users[username]) {
    errorMessage.textContent = "Такого пользователя не существует.";
    errorMessage.style.display = "block";
    return;
  }

  // Проверка пароля
  if (users[username].password !== password) {
    errorMessage.textContent = "Пароль неверный, попробуйте ввести снова.";
    errorMessage.style.display = "block";
    return;
  }

  // Успешная авторизация
  errorMessage.style.display = "none";

  // Сохраняем данные пользователя в localStorage
  localStorage.setItem("currentUser", JSON.stringify(users[username]));
  localStorage.setItem("currentUsername", username);

  // Переход на страницу профиля
  window.location.href = "profile.html";
});
