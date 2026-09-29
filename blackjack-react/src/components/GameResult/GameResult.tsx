import type { GameStatus } from "../../game/types";
import "./GameResult.css";

interface GameResultProps { status: GameStatus; bet: number; onNewRound: () => void; }

function GameResult({ status, bet, onNewRound }: GameResultProps) {
  const results: Partial<Record<GameStatus, { title: string; description: string }>> = {
    won: { title: "YOU WIN", description: `You won $${bet}` },
    lost: { title: "DEALER WINS", description: `You lost $${bet}` },
    push: { title: "PUSH", description: "Your bet has been returned" },
    blackjack: { title: "BLACKJACK!", description: `You won $${bet * 2.5}` },
    bust: { title: "BUST", description: `You lost $${bet}` },
  };
  const result = results[status];
  if (!result) return null;
  return <div className="result-overlay"><div className="result-card"><div className="result-title">{result.title}</div><div className="result-description">{result.description}</div><button className="new-round-button" onClick={onNewRound}>NEW ROUND</button></div></div>;
}

export default GameResult;