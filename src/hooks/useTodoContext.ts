import { useContext } from "react";
import { TodoContext } from "../context/todo-context";

export function useTodoContext() {
  const data = useContext(TodoContext);

  return data;
}
