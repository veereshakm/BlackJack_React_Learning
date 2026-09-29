import type { ICard } from "../../game/types";
import Card from "../Card/Card";
import "./Hand.css";

interface HandProps {
  cards: ICard[];
  hideSecondCard?: boolean;
}

export default function Hand({ cards, hideSecondCard = false }: HandProps) {
  return <div className="hand">
    {cards.map((card, index) => <Card key={`${card.suit}-${card.value}-${index}`} card={card} hidden={hideSecondCard && index === 1} />)}
  </div>;
}
