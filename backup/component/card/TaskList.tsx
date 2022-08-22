import React, { useState } from "react";
import { Task } from "../../model/todos";

interface TaskListProps {
  task: Task[];
  onDeleteTask: (id: string) => void;
  onUpdateTask: (id: string, updatedTask: string) => void;
}

function TaskList({
  task,
  onDeleteTask: deleteTask,
  onUpdateTask: updateTask
}: TaskListProps) {
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState("");

  const deleteTaskHandler = (e: React.FormEvent, id: string) => {
    e.preventDefault();
    deleteTask(id);
    console.log("menghapus task dengan id ", id);
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const editEnable = (e: React.FormEvent, name: string) => {
    e.preventDefault();
    setIsEdit(!isEdit);
    setValue(name);
  };

  const editDisabled = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEdit(!isEdit);
  };

  const updateHandler = (e: React.FormEvent, id: string, name: string) => {
    e.preventDefault();
    setIsEdit(!isEdit);
    updateTask(id, name);
  };

  return (
    <ul className="list-group list-group-flush">
      {task?.map((item) => (
        <li className="list-group-item" key={item.id}>
          <div className="d-flex gap-2 justify-content-between align-items-center">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultChecked={item.status}
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                {item.name}
              </label>
            </div>

            <div className="d-flex gap-1 align-items-center">
              <button
                className="btn btn-sm"
                onClick={(e) => editEnable(e, item.name)}
              >
                <i className="bi-pencil"></i>
              </button>
              <button
                className="btn btn-sm"
                onClick={(e) => deleteTaskHandler(e, item.id)}
              >
                <i className="bi-eraser"></i>
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
