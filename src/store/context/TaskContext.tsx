import React, { createContext, useReducer } from "react";
import { Task } from "../../models";
import { TASK } from "../action";
import { taskReducer } from "../reducer/taskReducer";

type State = Task[];

type Dispatch = (action: TASK) => void;

type ProviderProps = {
  children: React.ReactNode;
};

interface TaskContextInterface {
  state: State;
  dispatch: Dispatch;
}

export const TaskContext = createContext<TaskContextInterface | undefined>(
  undefined
);
const { Provider } = TaskContext;

export const TaskProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(taskReducer, []);
  const value = { state, dispatch };
  return <Provider value={value}>{children}</Provider>;
};
