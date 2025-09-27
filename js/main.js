// ماژول ساده برای بارگذاری اجزای HTML در صفحه اصلی
async function loadComponent(path, container) {
  const res = await fetch(path);
  const html = await res.text();
  html = html.trim();
  document.querySelector(container).insertAdjacentHTML("beforeend", html);
}

document.addEventListener("DOMContentLoaded", async () => {
  const app = document.getElementById("app");
  app.innerHTML = ""; // پاک کردن محتوای اولیه

  await loadComponent("./components/header.html", "#app");
  await loadComponent("./components/portfolio.html", "#app");
  await loadComponent("./components/footer.html", "#app");
});
