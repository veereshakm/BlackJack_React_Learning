import type { GameStatus, ICard } from "../../game/types";
import { getHandValue } from "../../utils/gameUtils";
import Hand from "../Hand/Hand";
import ActionButtons from "../ActionButtons/ActionButtons";
import BettingPanel from "../BettingPanel/BettingPanel";
import GameResult from "../GameResult/GameResult";
import "./GameTable.css";

interface GameTableProps { playerHand: ICard[]; dealerHand: ICard[]; balance: number; bet: number; status: GameStatus; onBet: (amount: number) => void; onHit: () => void; onStand: () => void; onNewRound: () => void; }

function GameTable({ playerHand, dealerHand, balance, bet, status, onBet, onHit, onStand, onNewRound }: GameTableProps) {
  const isPlaying = status === "playing";
  return <main className="game-table">
    <section className="dealer-section"><div className="section-title">DEALER</div><Hand cards={dealerHand} hideSecondCard={isPlaying} />{dealerHand.length > 0 && <div className="score">{isPlaying ? "?" : getHandValue(dealerHand)}</div>}</section>
    <div className="table-divider" />
    <section className="player-section"><div className="section-title">PLAYER</div><Hand cards={playerHand} />{playerHand.length > 0 && <div className="score">{getHandValue(playerHand)}</div>}</section>
    {status === "idle" && <BettingPanel balance={balance} onBet={onBet} />}
    {isPlaying && <ActionButtons onHit={onHit} onStand={onStand} />}
    {status !== "idle" && status !== "playing" && status !== "dealer-turn" && <GameResult status={status} bet={bet} onNewRound={onNewRound} />}
  </main>;
}

export default GameTable;
