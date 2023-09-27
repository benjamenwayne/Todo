const userEntry = document.querySelector("#user-entry");

const submit = document.querySelector("#submit");

const todosList = document.getElementById("todos");

submit.addEventListener("click", addToDo);

userEntry.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addToDo(e);
  }
});

function addToDo(e) {
  e.preventDefault();
  let userInput = userEntry.value.trim();

  if (userInput !== "") {
    let listItem = document.createElement("li");

    listItem.textContent = userInput;

    listItem.addEventListener("click", deleteToDo);

    todosList.appendChild(listItem);

    userEntry.value = "";
  }
}

function deleteToDo(event) {
  event.target.remove();
}
