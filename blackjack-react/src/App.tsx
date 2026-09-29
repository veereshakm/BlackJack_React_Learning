import GameTable from "./components/GameTable/GameTable";
import { useBlackjack } from "./hooks/useBlackjack";
import Header from "./components/Header/Header";
import "./App.css";

function App() {
  const { playerHand, dealerHand, balance, bet, status, startRound, hit, stand, resetGame } = useBlackjack();

  return (
    <div className="app"><Header balance={balance} /><GameTable playerHand={playerHand} dealerHand={dealerHand} balance={balance} bet={bet} status={status} onBet={startRound} onHit={hit} onStand={stand} onNewRound={resetGame} /></div>
  );
}

export default App;