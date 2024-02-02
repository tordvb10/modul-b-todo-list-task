/**
 * The file where everything comes together
 */
import * as todoList from "./scripts/todoList.js";
import { createTodoElement } from "./scripts/createTodoElement.js";
import * as utilities from "./scripts/utilities.js";

const maingrow = document.querySelector(".itsgrowing");
const knapp = document.querySelector("#inputbutton");
const text = document.querySelector("#inputtext");
let ToDoLists = [];
//maingrow.innerHTML = "";

knapp.addEventListener("click", function () {
  let nytext = text.value;
  let els = {};
  if (nytext.length !== 0) {
    //ToDoLists.forEach((els) => {
    //document
    // .querySelector(`#button_${els.id}`)
    //  .removeEventListener("click", utilities.mark_button(els));
    //});
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
