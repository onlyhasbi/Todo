import { Task } from "../../models";
import { TASK } from "../action";
import { OPTION } from "../constant";
import { v4 as uuidv4 } from "uuid";

export const taskReducer = (state: Task[], action: TASK): Task[] => {
  switch (action.type) {
    case OPTION.INSERT:
      return [...state, { id: uuidv4(), name: action.text, isDone: false }];
    case OPTION.UPDATE: {
      const index = state.findIndex((task) => task.id === action.id);
      state[index].name = action.text;
      return [...state];
    }
    case OPTION.ISDONE: {
      const index = state.findIndex((task) => task.id === action.id);
      state[index].isDone = action.isDone;
      return [...state];
    }
    case OPTION.DELETE:
      return state.filter((task) => task.id !== action.id);
    default:
      return state;
  }
};
