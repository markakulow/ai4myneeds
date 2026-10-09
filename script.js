const themeToggle = document.querySelector("#themeToggle");
const themeIcon = themeToggle?.querySelector(".theme-icon");
const year = document.querySelector("#year");

function currentTheme() {
  return document.documentElement.dataset.theme || "light";
}

function updateThemeButton() {
  const dark = currentTheme() === "dark";
  if(!themeToggle || !themeIcon) return;
  themeIcon.textContent = dark ? "☀️" : "🌙";
  themeToggle.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
  themeToggle.setAttribute("title", dark ? "Switch to light mode" : "Switch to dark mode");
}

themeToggle?.addEventListener("click", () => {
  const nextTheme = currentTheme() === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem("ai4myneeds-theme", nextTheme);
  updateThemeButton();
});

if(year) year.textContent = new Date().getFullYear();
updateThemeButton();

// Navigation V2 interactions
const navMenuToggle=document.querySelector(".nav-menu-toggle");
const navMain=document.querySelector(".main-nav");
const navDropdown=document.querySelector(".nav-dropdown");
const navDropdownToggle=document.querySelector(".nav-dropdown-toggle");
if(navMenuToggle&&navMain){
 navMenuToggle.addEventListener("click",()=>{
  const open=navMain.classList.toggle("nav-open");
  navMenuToggle.setAttribute("aria-expanded",String(open));
  navMenuToggle.setAttribute("aria-label",open?"Close navigation":"Open navigation");
 });
}
if(navDropdown&&navDropdownToggle){
 navDropdownToggle.addEventListener("click",()=>{
  const open=navDropdown.classList.toggle("is-open");
  navDropdownToggle.setAttribute("aria-expanded",String(open));
 });
}
document.addEventListener("click",e=>{
 if(navDropdown&&!navDropdown.contains(e.target)){
  navDropdown.classList.remove("is-open");
  navDropdownToggle?.setAttribute("aria-expanded","false");
 }
 if(navMain&&navMenuToggle&&!navMain.contains(e.target)&&!navMenuToggle.contains(e.target)){
  navMain.classList.remove("nav-open");
  navMenuToggle.setAttribute("aria-expanded","false");
 }
});
document.addEventListener("keydown",e=>{
 if(e.key==="Escape"){
  navDropdown?.classList.remove("is-open");
  navDropdownToggle?.setAttribute("aria-expanded","false");
  navMain?.classList.remove("nav-open");
  navMenuToggle?.setAttribute("aria-expanded","false");
 }
});
