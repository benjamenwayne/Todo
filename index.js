//creates variable that targets input field for user input
const userEntry = document.querySelector('#user-entry');

//creates variable that targets button for user submission
const userSubmit = document.querySelector('#user-submit');

//event listener that listens for click and then executes function addToDo
document.querySelector("#user-submit").addEventListener("click", addToDo);
//targets div with li elements in them
let todosList = document.getElementById('todos');




function addToDo() {
    //Grabs input text and makes it into a variable
    let userInput = userEntry.value;
    //Creates checkbox and sets the type of checkbox
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    // creates a variable that creates a li
    let listItem = document.createElement('li');
    //changes the variable listItem to whatever is typed in the input field.
    listItem.textContent = userInput;
    listItem.appendChild(checkbox);
    //targets todo list, says its going to change it, and changes it by creating a li made of whatever listItem is set to which is again determined by user entry.
    todosList.appendChild(listItem);
    //clears input field
    userEntry.value = "";
}

