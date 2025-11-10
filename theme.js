const themeBtn = document.getElementById("themeBtn");

// Load saved theme before anything else
if (localStorage.getItem("theme") === "light") {
  document.documentElement.classList.add("light");
  if (themeBtn) themeBtn.textContent = "☀️";
}

// Add event listener only if the button exists
if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    const light = document.documentElement.classList.toggle("light");
  localStorage.setItem("theme", light ? "light" : "dark");
  themeBtn.textContent = light ? "☀️" : "🌙";
});
}
