import { useState } from "react";
import "./BettingPanel.css";

interface BettingPanelProps { balance: number; onBet: (amount: number) => void; }

function BettingPanel({ balance, onBet }: BettingPanelProps) {
  const [bet, setBet] = useState(100);
  const quickBets = [10, 25, 50, 100, 250];
  const validBet = Number.isInteger(bet) && bet > 0 && bet <= balance;

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (validBet) onBet(bet);
  }

  return <form className="betting-panel" onSubmit={handleSubmit}>
    <div className="bet-title">PLACE YOUR BET</div>
    <div className="quick-bets">{quickBets.map((amount) => <button type="button" key={amount} onClick={() => setBet(amount)} className={bet === amount ? "chip selected" : "chip"}>${amount}</button>)}</div>
    <div className="custom-bet"><span>$</span><input type="number" min="1" max={balance} value={bet} onChange={(event) => setBet(Number(event.target.value))} /></div>
    <button className="deal-button" type="submit" disabled={!validBet}>DEAL</button>
  </form>;
}

export default BettingPanel;
