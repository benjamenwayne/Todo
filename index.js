const userEntry = document.querySelector('#user-entry');
const userSubmit = document.querySelector('#user-submit');

//event listener that listens for click and then executes function addToDo

document.getElementById("user-submit").addEventListener("click", addToDo);

function addToDo() {
    //Grabs input text and makes it into a variable
    let userInput = userEntry.value;
    //targets div with li elements in them
    let todosList = document.getElementById('todos');
    // creates a variable that creates a li
    let listItem = document.createElement('li');
    //changes the variable listItem to whatever is typed in the input field.
    listItem.textContent = userInput;
    //targets todo list, says its going to change it, and changes it by creating a li made of whatever listItem is set to which is again determined by user entry.
    todosList.appendChild(listItem);
    //clears input field
    userEntry.value = "";
}
