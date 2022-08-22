import { OPTION } from "../constant";

export type TODO =
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
      type: OPTION.DELETE;
      id: string;
    };
