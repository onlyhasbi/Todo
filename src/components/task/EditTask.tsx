import React, { useState } from "react";
import { Task } from "../../models";
import { OPTION } from "../../store/constant";
import { useTask } from "../../store/hook";
import { RiCloseLine, RiCheckLine } from "react-icons/ri";

interface EditTaskProps {
  onTask: Task;
  onSetTask: React.Dispatch<React.SetStateAction<Task>>;

  onIsEdit: boolean;
  onSetIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

function EditTask({
  onTask: task,
  onSetTask: setTask,
  onIsEdit: isEdit,
  onSetIsEdit: setIsEdit
}: EditTaskProps) {
  const { dispatch } = useTask();
  const [value, setValue] = useState<string>(task.name);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const updateHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.length === 0) return;
    setTask({ ...task, name: value });
    dispatch({ type: OPTION.UPDATE, id: task.id, text: value });
    setIsEdit(!isEdit);
  };

  const editDisabled = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEdit(!isEdit);
  };

  return (
    <div className="d-flex gap-2 justify-content-between align-items-center">
      <input
        type="text"
        className="form-control"
        placeholder="Edit task"
        onChange={changeHandler}
        value={value}
      />

      <div className="d-flex gap-1 align-items-center">
        <button className="btn btn-sm" onClick={updateHandler}>
          <RiCheckLine></RiCheckLine>
        </button>
        <button className="btn btn-sm" onClick={editDisabled}>
          <RiCloseLine></RiCloseLine>
        </button>
      </div>
    </div>
  );
}

export default EditTask;
