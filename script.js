const themeToggle = document.querySelector("#themeToggle");
const themeIcon = themeToggle.querySelector(".theme-icon");
const year = document.querySelector("#year");

function currentTheme() {
  return document.documentElement.dataset.theme || "light";
}

function updateThemeButton() {
  const dark = currentTheme() === "dark";
  themeIcon.textContent = dark ? "☀️" : "🌙";
  themeToggle.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
  themeToggle.setAttribute("title", dark ? "Switch to light mode" : "Switch to dark mode");
}

themeToggle.addEventListener("click", () => {
  const nextTheme = currentTheme() === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem("ai4myneeds-theme", nextTheme);
  updateThemeButton();
});

year.textContent = new Date().getFullYear();
updateThemeButton();
