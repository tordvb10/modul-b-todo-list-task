import { createTodoElement } from "./createTodoElement.js";
import { mark_button } from "./utilities.js";
/**
 * Returns all the Todoes in a list
 *
 * @returns {Todo}
 */
export function getAllTodoes() {
  console.log("helleo world");
  const ul = document.querySelector("ul");
  if (ul.hasChildNodes()) {
    console.log("helleo world");
    let liel;
    for (let i = 0; i < ul.childElementCount; i++) {
      liel = ul.children[i];
      console.log(liel);
    }
  }
}

/**
 * Creates a new Todo based on the passed
 * in data
 *
 * @param {TodoCreationInfo} data
 * @returns {Todo}
 */

export function addTodo(data) {
  let todo = {};
  todo.title = data;
  todo.createdAt = new Date();
  todo.updatedAt = new Date();
  todo.isComplete = false;
  todo.id = new Date().getTime();
  return todo;
}

export function updateDisplay(TodoLists) {
  const maingrow = document.querySelector(".itsgrowing");
  maingrow.innerHTML = "";
  TodoLists.forEach((el) => {
    maingrow.innerHTML += createTodoElement(el);
  });
  TodoLists.forEach((el) => {
    let ToBeMarked = document.querySelector("#button_" + el.id);
    ToBeMarked.addEventListener("click", () => {
      mark_button(el);
    });
  });
}
