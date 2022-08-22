import { Todo } from "../../models";
import { TODO } from "../action";
import { OPTION } from "../constant";
import { v4 as uuidv4 } from "uuid";

export const todoReducer = (state: Todo[], action: TODO): Todo[] => {
  switch (action.type) {
    case OPTION.INSERT:
      return [...state, { id: uuidv4(), title: action.text }];
    case OPTION.UPDATE: {
      const index = state.findIndex((todo) => todo.id === action.id);
      state[index].title = action.text;
      return [...state];
    }
    case OPTION.DELETE:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};
