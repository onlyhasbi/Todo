import React from "react";
import { TaskProvider } from "../../store/context";
import NewTask from "../task/NewTask";
import TaskList from "../task/TaskList";

interface cardProps {
  title: string;
  onChangeTitle: () => void;
  children: React.ReactNode;
}

const Card: React.FC<cardProps> = ({
  title,
  onChangeTitle: changeTitle,
  children
}) => {
  return (
    <TaskProvider>
      <div className="card" style={{ width: "20rem" }}>
        <div className="card-header d-flex justify-content-between align-items-center">
          <span onDoubleClick={changeTitle} style={{ cursor: "pointer" }}>
            {title}
          </span>
          {children}
        </div>
        <TaskList />
        <div className="card-body">
          <NewTask />
        </div>
      </div>
    </TaskProvider>
  );
};

export default Card;
