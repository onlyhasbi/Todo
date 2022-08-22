import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export const useTask = () => {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error("useTodo must be used within a TaskProvider");
  }

  return context;
};
