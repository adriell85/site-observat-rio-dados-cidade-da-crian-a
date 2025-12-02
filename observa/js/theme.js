// js/theme.js
(function(){
  const THEME_KEY = "observa-theme";

  function applyTheme(theme){
    document.documentElement.setAttribute("data-theme", theme);
    const btn = document.getElementById("themeToggle");
    if(btn){
      btn.textContent = theme === "dark" ? "☀️" : "🌙";
    }
  }

  function getPreferredTheme(){
    const stored = localStorage.getItem(THEME_KEY);
    if(stored === "light" || stored === "dark") return stored;

    if(window.matchMedia &&
       window.matchMedia("(prefers-color-scheme: dark)").matches){
      return "dark";
    }
    return "light";
  }

  document.addEventListener("DOMContentLoaded", function(){
    const initialTheme = getPreferredTheme();
    applyTheme(initialTheme);

    const btn = document.getElementById("themeToggle");
    if(btn){
      btn.addEventListener("click", function(){
        const current = document.documentElement.getAttribute("data-theme") || "light";
        const next = current === "light" ? "dark" : "light";
        applyTheme(next);
        localStorage.setItem(THEME_KEY, next);
      });
    }
  });
})();
