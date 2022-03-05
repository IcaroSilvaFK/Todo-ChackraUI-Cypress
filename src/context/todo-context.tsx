import { FC, createContext, useState, useEffect } from "react";
import { getStorage, setStorage } from "../utils/localStorage";

export interface ITodoProp {
  newTask: string;
  isComplet: boolean;
  id: string;
}

interface ITodoContextProp {
  todos: ITodoProp[] | null;
  handleAddNewTodo: (todo: ITodoProp) => void;
  isTodo: boolean;
}

export const TodoContext = createContext<ITodoContextProp>(
  {} as ITodoContextProp
);

export const TodoContextProvider: FC<{}> = ({ children }) => {
  const [todos, setTodos] = useState<ITodoProp[] | null>(null);
  const [isTodo, setIsTodo] = useState(true);
  const handleAddNewTodo = (todo: ITodoProp) => {
    if (todos) setTodos([...todos, todo]);
    else setTodos([todo]);
    setStorage(todo);
  };

  useEffect(() => {
    (() => {
      const response = getStorage();
      if (response) {
        setTodos([response]);
        setIsTodo(false);
      }
    })();
  }, []);
  return (
    <TodoContext.Provider value={{ handleAddNewTodo, todos, isTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
