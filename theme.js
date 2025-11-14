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

// Smooth Page Transitions
/*document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.remove("page-transition");

document.querySelectorAll("a[href]").forEach(link => {
  const url = link.getAttribute("href");
if (!url || url.startsWith("#") || link.target === "_blank") return;

link.addEventListener("click", (e) => {
  e.preventDefault();
document.body.classList.add("page-transition");
setTimeout(() => {
  window.location.href = url;
}, 450);
});
});
});*/

function enablePageTransitions() {
  document.querySelectorAll("a[href]").forEach(link => {
    const url = link.getAttribute("href");
  if (!url || url.startsWith("#") || link.target === "_blank") return;

  link.addEventListener("click", (e) => {
    e.preventDefault();
  document.body.classList.add("page-transition");
  setTimeout(() => {
    window.location.href = url;
}, 450);
});
});
}

// On initial load
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.remove("page-transition");
enablePageTransitions(); // initial page load
});

// ⭐ CRITICAL FIX: When pressing back, reload transitions correctly
window.addEventListener("pageshow", (event) => {
  // If the page was restored from the cache
  if (event.persisted) {
  document.body.classList.remove("page-transition");
}
});

