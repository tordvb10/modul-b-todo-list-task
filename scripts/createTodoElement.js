/**
 * Takes a Todo Item and generates a HTML Element for that Todo
 * You are free to make whatever HTML you feel necessary,
 * But it should be semantically meaningful and
 * look decent
 *
 * @param {Todo} data
 * @returns {HTMLElement}
 */
export function createTodoElement(data) {
  let htmlEL = `
    <ul> 
        <li>${data}</li>
    </ul>
    `;
  return htmlEL;
}
