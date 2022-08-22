import { OPTION } from "../constant";

export type TASK =
  | {
      type: OPTION.INSERT;
      text: string;
    }
  | {
      type: OPTION.UPDATE;
      id: string;
      text: string;
    }
  | {
      type: OPTION.ISDONE;
      id: string;
      isDone: boolean;
    }
  | {
      type: OPTION.DELETE;
      id: string;
    };
