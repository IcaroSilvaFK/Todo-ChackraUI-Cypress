import { ITodoProp } from "../context/todo-context";

export function setStorage(item: ITodoProp) {
  localStorage.setItem("todos", JSON.stringify(item));
}

export function getStorage(): ITodoProp | null {
  const todosSaveds = localStorage.getItem("todos");

  if (!todosSaveds) {
    console.log("s");
    return null;
  }

  return JSON.parse(todosSaveds);
}
