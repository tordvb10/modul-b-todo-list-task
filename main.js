/**
 * The file where everything comes together
 */
import * as todoList from "./scripts/todoList.js";

const knapp = document.querySelector("#inputbutton");
const text = document.querySelector("#inputtext");
let ToDoLists = [];

knapp.addEventListener("click", function () {
  let nytext = text.value;
  if (nytext.length !== 0) {
    // Hvis det er ikke noe tekst i feltet, så blir meldingen ikke publisert.
    let todoel = todoList.addTodo(nytext);
    ToDoLists.push(todoel);
    todoList.updateDisplay(ToDoLists);
  }
  //todoList.getAllTodoes();
});
