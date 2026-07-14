let toggle = document.getElementById("toggle-img");
let isDark = false;
let nav = document.querySelector("nav");

function lightMode() {
  toggle.src = "./assets/moon.svg";
  document.body.style.backgroundColor = "#F8FAFC";
  document.body.style.color = "#0F172A";
  nav.style.backgroundColor = "#FFFFFF";
  nav.style.borderBottom = "2px solid #E2E8F0";
  toggle.style.backgroundColor = "#000";
  document.querySelectorAll(".bottom-border").forEach((border) => {
    border.style.borderBottom = "1px solid #000";
  });
  document.querySelectorAll("td, th").forEach((cell) => {
    cell.style.borderColor = "#000";
  });
  Array.from(document.getElementsByTagName("section")).forEach((section) => {
    section.style.borderColor = "#000";
  });
}

function darkMode() {
  toggle.src = "./assets/sun.svg";
  document.body.style.backgroundColor = "#0F172A";
  document.body.style.color = "#F8FAFC";
  nav.style.backgroundColor = "#1E293B";
  nav.style.borderBottom = "#334155";
  toggle.style.backgroundColor = "#fff";
  document.querySelectorAll(".bottom-border").forEach((border) => {
    border.style.borderBottom = "1px solid #fff";
  });
  document.querySelectorAll("td, th").forEach((cell) => {
    cell.style.borderColor = "#fff";
  });
  Array.from(document.getElementsByTagName("section")).forEach((section) => {
    section.style.borderColor = "#fff";
  });
}

toggle.addEventListener("click", () => {
  if (isDark) {
    lightMode();
  } else {
    darkMode();
  }
  isDark = !isDark;
});

let currentHr = new Date().getHours();
let greet = document.getElementById("greet");
if (currentHr < 12) {
  greet.innerText = "Morning";
} else if (currentHr < 17) {
  greet.innerText = "Afternoon";
} else if (currentHr < 21) {
  greet.innerText = "Evening";
} else {
  greet.innerText = "Night";
}

let task = document.querySelector(".task");
let taskBtn = document.querySelector(".task-btn");

taskBtn.addEventListener("click", () => {
  document.querySelector(".new-task").style.display = "none";
});

function taskToggle() {
  document.querySelector(".task-form").style.display = "block";
}

let count = 0;
function taskAdd() {
  let taskName = document.querySelector(".task-name").value;
  if (taskName == "") {
    return false;
  }
  taskToggle();
  alert("New task added");
  console.log(taskName);
  let taskList = document.createElement("li");
  taskList.className = "task-list";
  document.querySelector(".task-lists").append(taskList);
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  let label = document.createElement("label");
  checkbox.id = "checkbox-" + count;
  label.htmlFor = "checkbox-" + count;
  taskList.append(checkbox, label);
  label.append(taskName);
  count++;
  console.log(taskList);
}
