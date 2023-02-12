const form = document.querySelector("#form-habits");
const select = document.querySelector("#habit-select");
const nlwSetup = new NLWSetup(form);
const button = document.querySelector("header button");

button.addEventListener("click", add);
form.addEventListener("change", save);

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5);
  const dayExists = nlwSetup.dayExists(today);

  if (dayExists) {
    alert("Dia já incluso!");
    return;
  }

  alert("Registrado com sucesso! ✅");
  nlwSetup.addDay(today, select.value);
}

function save() {
  localStorage.setItem("NLWSetup-Habits", JSON.stringify(nlwSetup.data));
  localStorage.getItem("NLWSetup-Habits");
}

const data = JSON.parse(localStorage.getItem("NLWSetup-Habits")) || {};

nlwSetup.setData(data);
nlwSetup.load();
