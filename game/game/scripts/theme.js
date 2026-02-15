// Смена темы
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Устанавливаем тему при загрузке страницы
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    body.className = savedTheme;
}

themeToggle.addEventListener("click", () => {
    body.classList.toggle("light-theme");
    body.classList.toggle("dark-theme");

    // Сохраняем текущую тему
    localStorage.setItem("theme", body.className);
});
