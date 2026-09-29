import { useState } from "react";
import BlackjackGame from "../game/blackjack";
import type { GameStatus, ICard } from "../game/types";

export function useBlackjack() {
  const [game] = useState(() => new BlackjackGame(1000));
  const [playerHand, setPlayerHand] = useState<ICard[]>([]);
  const [dealerHand, setDealerHand] = useState<ICard[]>([]);
  const [balance, setBalance] = useState(1000);
  const [bet, setBet] = useState(0);
  const [status, setStatus] = useState<GameStatus>("idle");

  function syncGame() {
    setPlayerHand([...game.playerHand]);
    setDealerHand([...game.dealerHand]);
    setBalance(game.balance);
    setBet(game.bet);
    setStatus(game.status);
  }

  return {
    game,
    playerHand,
    dealerHand,
    balance,
    bet,
    status,
    startRound: (amount: number) => { game.startRound(amount); syncGame(); },
    hit: () => { game.hit(); syncGame(); },
    stand: () => { game.stand(); syncGame(); },
    resetGame: () => { game.resetGame(); syncGame(); },
  };
}
