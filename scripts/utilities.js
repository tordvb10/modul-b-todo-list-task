/**
 * A file for storing helpful functions.
 * Use it for those which do not directly belong
 * to anything else
 *
 * Might I suggest you create a function for generating
 * random IDs?
 * type generateId = () => number
 */
//import { updateDisplay } from "./todoList";

import { fixIsMarkd } from "./createTodoElement.js";

export function mark_button(el) {
  el.updatedAt = new Date();
  el.isComplete = el.isComplete ? false : true;
  document.querySelector(`#li_${el.id}`).innerHTML = fixIsMarkd(el);
  document.querySelector("#button_" + el.id).addEventListener("click", () => {
    mark_button(el);
  });
}
