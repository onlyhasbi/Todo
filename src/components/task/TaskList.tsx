import React from "react";
import { useTask } from "../../store/hook";
import TaskItem from "./TaskItem";

const TaskList: React.FC = () => {
  const { state } = useTask();

  return (
    <ul className="list-group list-group-flush">
      {state?.map(({ id }) => (
        <li className="list-group-item" key={id}>
          <TaskItem id={id} />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
