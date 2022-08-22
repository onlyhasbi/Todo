import { createContext, useReducer } from "react";
import { Todo } from "../../models";
import { TODO } from "../action";
import { todoReducer } from "../reducer/todoReducer";

type State = Todo[];

type Dispatch = (action: TODO) => void;

type ProviderProps = {
  children: React.ReactNode;
};

interface TodoContextInterface {
  state: State;
  dispatch: Dispatch;
}

export const TodoContext = createContext<TodoContextInterface | undefined>(
  undefined
);
const { Provider } = TodoContext;

export const TodoProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(todoReducer, []);
  const value = { state, dispatch };
  return <Provider value={value}>{children}</Provider>;
};
