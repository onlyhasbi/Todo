import React, { useState } from "react";
import { useTask } from "../../store/hook";
import { OPTION } from "../../store/constant";
import { RiAddLine } from "react-icons/ri";

function NewTask() {
  const [item, setItem] = useState("");
  const { dispatch } = useTask();

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (!!item.length) {
      dispatch({ type: OPTION.INSERT, text: item });
      setItem("");
      console.log(item, " ditambahkan");
    }
  };

  const changehandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setItem(e.target.value);
  };

  return (
    <form onSubmit={submitHandler} className="d-flex gap-2">
      <input
        type="text"
        name="name"
        className="form-control"
        placeholder="add new task"
        value={item}
        onChange={changehandler}
      />
      <button type="submit" className="btn btn-sm btn-primary px-3">
        <RiAddLine></RiAddLine>
      </button>
    </form>
  );
}

export default NewTask;
