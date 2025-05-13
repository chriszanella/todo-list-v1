const inputText = document.querySelector("#itemInput");
const sendButton = document.querySelector("#sendButton");
const ul = document.querySelector("#todoList");

let apagarBtn = document.querySelector("#apagar-button");

function createTagLi(texto) {
  const newLi = document.createElement("li");
  newLi.innerText = texto;
  return newLi;
}
function createButtonDelete(li) {
  const apagarBtn = document.createElement("button");
  apagarBtn.setAttribute("id", "apagar-button");
  apagarBtn.innerText = "Apagar";
  apagarBtn.setAttribute("class", "apagarBtn");
  li.appendChild(apagarBtn);
}
function createTask(texto) {
  const li = createTagLi(texto);
  ("");
  ul.appendChild(li);
  createButtonDelete(li);
  cleanInput();
  saveAllItems();
}
function cleanInput() {
  inputText.value = "";
  inputText.focus();
}
function saveAllItems() {
  let lis = ul.querySelectorAll("li");
  const taskText = [];
  for (let text of lis) {
    let taskTexts = text.innerText;
    taskTexts = taskTexts.replace("Apagar", "").trim();
    taskText.push(taskTexts);
  }
  let taskTextString = JSON.stringify(taskText);
  localStorage.setItem("tarefas", taskTextString);
}
function retornarALLItems() {
  const tasks = localStorage.getItem("tarefas");
  const tasksList = JSON.parse(tasks);
  tasksList.forEach((task) => {
    createTask(task);
  });
}

sendButton.addEventListener("click", function () {
  if (!inputText.value) return;
  createTask(inputText.value);
});
document.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    createTask(inputText.value);
  }
});
document.addEventListener("click", function (event) {
  if (event.target.classList.contains("apagarBtn")) {
    event.target.parentElement.remove();
    saveAllItems();
  }
});
retornarALLItems();
