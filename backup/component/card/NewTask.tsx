import React, { useState } from "react";
import { Task } from "../../model/todos";
import { v4 as uuidv4 } from "uuid";

interface NewTaskProps {
  cardTask: Task[];
  onSetTask: React.Dispatch<React.SetStateAction<Task[]>>;
}

function NewTask({ cardTask: task, onSetTask: setTask }: NewTaskProps) {
  const [item, setItem] = useState("");

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (!!item.length) {
      const newTask: Task = {
        id: uuidv4(),
        name: item,
        isDone: false
      };
      setTask([...task, newTask]);
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
        <i className="bi-plus-lg"></i>
      </button>
    </form>
  );
}

export default NewTask;
