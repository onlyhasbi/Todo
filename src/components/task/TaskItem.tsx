import React, { useState } from "react";
import { Task } from "../../models";
import { OPTION } from "../../store/constant";
import { useTask } from "../../store/hook";
import EditTask from "./EditTask";
import { RiPencilLine, RiDeleteBin7Line } from "react-icons/ri";

interface TaskItemProps {
  id: string;
}

const TaskItem: React.FC<TaskItemProps> = ({ id }) => {
  const { state, dispatch } = useTask();
  const task: Task = state?.filter((item) => item.id === id)[0];
  const [value, setValue] = useState<Task>(task);
  const [isEdit, setIsEdit] = useState(false);

  const editEnable = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEdit(!isEdit);
  };

  const deleteTaskHandler = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: OPTION.DELETE, id });
    console.log("menghapus task ", id);
  };

  const checkedTaskHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedChecked = { ...value, isDone: !value.isDone };
    setValue(updatedChecked);
    dispatch({ type: OPTION.ISDONE, id: value.id, isDone: value.isDone });
    console.log("is done   ", e.target.checked);
    console.log(value);
  };

  if (isEdit)
    return (
      <EditTask
        onTask={value}
        onSetTask={setValue}
        onIsEdit={isEdit}
        onSetIsEdit={setIsEdit}
      />
    );

  return (
    <div className="d-flex gap-2 justify-content-between align-items-center">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          checked={value.isDone}
          onChange={checkedTaskHandler}
          id={id}
        />
        <label
          className={`form-check-label ${
            value.isDone && "text-decoration-line-through"
          }`}
          htmlFor={id}
        >
          {value.name}
        </label>
      </div>

      <div className="d-flex gap-1 align-items-center">
        <button className="btn btn-sm" onClick={editEnable}>
          <RiPencilLine></RiPencilLine>
        </button>
        <button className="btn btn-sm" onClick={deleteTaskHandler}>
          <RiDeleteBin7Line></RiDeleteBin7Line>
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
