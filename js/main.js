const root = document.documentElement;
const toggle = document.getElementById("theme-toggle");
const stored = localStorage.getItem("theme");

if (stored) {
  root.dataset.theme = stored;
}

toggle?.addEventListener("click", () => {
  const next = root.dataset.theme === "light" ? "dark" : "light";
  root.dataset.theme = next === "dark" ? "" : "light";
  localStorage.setItem("theme", root.dataset.theme || "dark");
});
