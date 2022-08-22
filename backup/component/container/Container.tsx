import { useState } from "react";
import { Todo } from "../../model/todos";
import { v4 as uuidv4 } from "uuid";
import Card from "../card/Card";

function Container() {
  const [cards, setCard] = useState<Todo[]>([]);

  const addCardHandler = () => {
    const title = prompt("Card title :");
    if (!title) return;

    const newCard = {
      id: uuidv4(),
      title
    };

    setCard((prev) => [...prev, newCard]);
  };

  const deleteCardHandler = (id: string) => {
    setCard(cards.filter((card) => card.id !== id));
  };

  const totalCard: number = cards.length;

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
        {cards?.map((item) => (
          <div
            key={item.id}
            className="col-sm-6 col-md-4 mb-5 gap-2 d-flex justify-content-center align-items-start"
          >
            <Card
              cardName={item.title}
              onDeleteCard={deleteCardHandler(item.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Container;
