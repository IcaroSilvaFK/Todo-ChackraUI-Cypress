import { FC, createContext, useState, useEffect } from "react";
import { addTodosLocalStorage } from "../utils";

export interface ITodoProp {
  newTask: string;
  isComplet: boolean;
  id: string;
  date: string;
}

interface ITodoContextProp {
  todos: ITodoProp[] | null;
  handleAddNewTodo: (todo: ITodoProp) => void;
}

export const TodoContext = createContext<ITodoContextProp>(
  {} as ITodoContextProp
);

export const TodoContextProvider: FC<{}> = ({ children }) => {
  const [todos, setTodos] = useState<ITodoProp[]>([]);

  const handleAddNewTodo = (todo: ITodoProp) => {
    setTodos([...todos, todo]);
    addTodosLocalStorage(todos);
  };

  const localStorageGet = () => {
    const storage = localStorage.getItem("todos");
    if (storage) {
      const result = JSON.parse(storage);
      if (todos) setTodos(result);
    }
  };

  useEffect(() => {
    localStorageGet();
    addTodosLocalStorage(todos);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(todos);
  return (
    <TodoContext.Provider value={{ handleAddNewTodo, todos }}>
      {children}
    </TodoContext.Provider>
  );
};

/*
  
*/
