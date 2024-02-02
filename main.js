/**
 * The file where everything comes together
 */
import * as todoList from "./scripts/todoList.js";
import { createTodoElement } from "./scripts/createTodoElement.js";

const maingrow = document.querySelector(".itsgrowing");
const knapp = document.querySelector("#inputbutton");
const text = document.querySelector("#inputtext");
let ToDoLists = [];
//maingrow.innerHTML = "";

knapp.addEventListener("click", function () {
  let nytext = text.value;
  if (nytext.length !== 0) {
    let todoel = todoList.addTodo(nytext);
    ToDoLists.push(todoel);
    todoList.updateDisplay(ToDoLists);
  }
});

//maingrow.innerHTML = todoel.title;
//maingrow.innerHTML = "";

// What elements do we need?
// What events do we need to listen for?
// What should happen when those event occur?
