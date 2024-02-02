/**
 * The file where everything comes together
 */
import * as todoList from "./scripts/todoList.js";
import { createTodoElement } from "./scripts/createTodoElement.js";

const maingrow = document.querySelector(".itsgrowing");
const knapp = document.querySelector("#inputbutton");
const text = document.querySelector("#inputtext");
let ToDoLists = [];
let todoel = todoList.addTodo(createTodoElement("heisann"));
console.log(todoel);
maingrow.innerHTML = "";

knapp.addEventListener("click", function () {
  console.log(maingrow.childElementCount);
  let nytext = text.value;

  if (nytext.length !== 0) {
    let nextTodo = createTodoElement(text.value);
    todoel = todoList.addTodo(nextTodo);
    ToDoLists.push(todoel);
    todoList.updateDisplay(ToDoLists);
  }
});

function myfunction() {
  console.log("hello world");
}

//maingrow.innerHTML = todoel.title;
//maingrow.innerHTML = "";

// What elements do we need?
// What events do we need to listen for?
// What should happen when those event occur?
