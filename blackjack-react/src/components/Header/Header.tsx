import "./Header.css";

interface HeaderProps {
  balance: number;
}

function Header({ balance }: HeaderProps) {
  return (
    <header className="game-header">
      <div className="brand"><span className="brand-symbol">♠</span><span>BLACKJACK</span></div>
      <div className="header-balance">Balance: ${balance.toFixed(0)}</div>
    </header>
  );
}

export default Header;
