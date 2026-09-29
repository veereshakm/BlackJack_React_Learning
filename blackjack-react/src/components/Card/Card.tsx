import type { ICard } from "../../game/types";
import CardModel from "../../game/card";
import "./Card.css";

interface CardProps {
  card: ICard;
  hidden?: boolean;
}

function Card({ card, hidden = false }: CardProps) {
  const label = new CardModel(card.value, card.suit).getName();
  return (
    <div className={`playing-card ${hidden ? "card-back" : card.suit === "♥" || card.suit === "♦" ? "red-card" : "black-card"}`}>
      {hidden ? <div className="card-back-pattern">♠ ♥</div> : <><div className="card-corner top-left"><span>{label}</span><span>{card.suit}</span></div><div className="card-center">{card.suit}</div><div className="card-corner bottom-right"><span>{label}</span><span>{card.suit}</span></div></>}
    </div>
  );
}

export default Card;
