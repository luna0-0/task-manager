let toggle = document.getElementById("toggle-img");
let isDark = false;
let nav = document.querySelector("nav");
toggle.addEventListener("click", () => {
  if (!isDark) {
    toggle.src = "./assets/sun.svg";
    document.body.style.backgroundColor = "#0F172A";
    document.body.style.color = "#F8FAFC";
    nav.style.backgroundColor = "#1E293B";
    nav.style.borderBottom = "#334155";
    toggle.style.backgroundColor = "#fff";
    isDark = !isDark;
  } else {
    toggle.src = "./assets/moon.svg";
    document.body.style.backgroundColor = "#F8FAFC";
    document.body.style.color = "#0F172A";
    nav.style.backgroundColor = "#FFFFFF";
    nav.style.borderBottom = "2px solid #E2E8F0";
    toggle.style.backgroundColor = "#000";
    isDark = !isDark;
  }
});
