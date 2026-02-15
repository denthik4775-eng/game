// Получаем данные о текущем пользователе из localStorage
const currentUser = JSON.parse(localStorage.getItem("currentUser"));
const currentUsername = localStorage.getItem("currentUsername");

if (currentUser && currentUsername) {
  // Заполняем данные на странице
  document.getElementById("username-display").textContent = currentUsername;
  document.getElementById("hours-played").textContent = currentUser.hours;
  document.getElementById("user-tariff").textContent = currentUser.tariff;
  document.getElementById("user-info").textContent = currentUser.info;

  // Устанавливаем аватарку (можно добавить разные аватарки для каждого пользователя)
  const avatar = document.getElementById("user-avatar");
  if (currentUsername === "shrek") {
    avatar.src = "../images/shrek-avatar.png";
  } else if (currentUsername === "fiona") {
    avatar.src = "../images/fiona-avatar.png";
  } else if (currentUsername === "donkey") {
    avatar.src = "../images/donkey-avatar.png";
  }
} else {
  // Если данных нет, перенаправляем на страницу авторизации
  window.location.href = "login.html";
}
