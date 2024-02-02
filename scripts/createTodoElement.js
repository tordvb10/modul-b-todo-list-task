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
          <li class="bg-primary text-secondary">
            <p>${data.title}</p>
            <p>Created at ${data.createdAt.toLocaleDateString()}, ${data.createdAt.toLocaleTimeString()}</p>
            <button class="delete bg-primary">
              <svg
                width="20"
                height="20"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32.5 60L10 37.5L13.535 33.965L32.5 52.9275L66.465 18.965L70 22.5L32.5 60Z"
                  fill="text-secondary"
                />
              </svg>
            </button>
          </li>
    `;
  return htmlEL;
}
