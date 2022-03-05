export function addTodosLocalStorage(todos: any) {
  localStorage.setItem("todos", JSON.stringify(todos));
}
