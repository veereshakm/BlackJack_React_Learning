export type Suit = "♠" | "♥" | "♦" | "♣";

export type GameStatus =
  | "idle"
  | "playing"
  | "dealer-turn"
  | "won"
  | "lost"
  | "push"
  | "blackjack"
  | "bust";

export interface ICard {
  value: number;
  suit: Suit;
}