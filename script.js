const root = document.documentElement;
const toggle = document.querySelector(".theme-toggle");
const storedTheme = localStorage.getItem("theme");

if (storedTheme) {
  root.dataset.theme = storedTheme;
}

toggle?.addEventListener("click", () => {
  const next = root.dataset.theme === "night" ? "" : "night";

  if (next) {
    root.dataset.theme = next;
    localStorage.setItem("theme", next);
  } else {
    delete root.dataset.theme;
    localStorage.removeItem("theme");
  }
});
