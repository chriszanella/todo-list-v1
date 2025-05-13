const inputText = document.querySelector("#itemInput");
const sendButton = document.querySelector("#sendButton");
const ul = document.querySelector("#todoList");

let apagarBtn = document.querySelector('#apagar-button');

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
  // ja criei li ✅
  // atualizar text content  ✅
  // depois adicionar botao de apagar que chama uma funcao que exclui o li inteiro (elemento pai dela).
  // ja adicionei dentro de ul ✅
  const li = createTagLi(texto);''
  ul.appendChild(li);
  createButtonDelete(li);
  cleanInput();
}

// funcao para limpar input e focar nele novamente
function cleanInput() {
  inputText.value = "";
  inputText.focus();
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

document.addEventListener('click', function(event) {
  if (event.target.classList.contains('apagarBtn')) {
    event.target.parentElement.remove()
  }
})