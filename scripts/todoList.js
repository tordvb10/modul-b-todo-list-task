/**
 * Returns all the Todoes in a list
 *
 * @returns {Todo}
 */
export function getAllTodoes() {}

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
  todo.updatetAt = new Date();
  todo.isComplete = true;
  todo.id = Math.random();
  return todo;
}

export function updateDisplay(TodoLists) {
  const maingrow = document.querySelector(".itsgrowing");
  maingrow.innerHTML = "";
  TodoLists.forEach((el) => {
    maingrow.innerHTML += el.title;
  });
}
