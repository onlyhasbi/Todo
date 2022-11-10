import React from "react";
import Card from "../card/Card";
import { useTodo } from "../../store/hook";
import { OPTION } from "../../store/constant";
import { RiCloseLine } from "react-icons/ri";

const Container: React.FC = () => {
  const { state, dispatch } = useTodo();

  const addCardHandler = () => {
    let cardTitle: string | null = prompt("Card name :");
    if (cardTitle?.trim().length === 0) return;
    if (typeof cardTitle === "string")
      dispatch({ type: OPTION.INSERT, text: cardTitle });
  };

  const deleteCardHandler = (id: string) => {
    dispatch({ type: OPTION.DELETE, id });
  };

  const changeTitleHandler = (id: string, title: string) => {
    let newTitle: string | null = prompt("New card name :", title);
    if (newTitle?.trim().length === 0) return;
    if (title === newTitle) return;
    if (typeof newTitle === "string") {
      dispatch({ type: OPTION.UPDATE, id: id, text: newTitle });
    }
  };

  const totalCard: number = state.length;
  return (
    <div className="container mt-4">
      <div className="d-flex gap-3 mb-4 align-items-center justify-content-center">
        <button className="btn btn-primary px-3" onClick={addCardHandler}>
          Add Card
        </button>
        <h6 className="text-center text-muted mt-1">
          {!!totalCard ? `${totalCard} Cards created` : `No cards in container`}
        </h6>
      </div>
      <div className="row">
        {state?.map((todo) => (
          <div
            key={todo.id}
            className="col-sm-6 col-md-4 mb-5 gap-2 d-flex justify-content-center align-items-start"
          >
            <Card
              title={todo.title}
              onChangeTitle={() => changeTitleHandler(todo.id, todo.title)}
            >
              <button
                className="btn btn-sm"
                onClick={() => deleteCardHandler(todo.id)}
              >
                <RiCloseLine></RiCloseLine>
              </button>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Container;
