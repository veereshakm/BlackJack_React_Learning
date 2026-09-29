import "./ActionButtons.css";

interface ActionButtonsProps { onHit: () => void; onStand: () => void; disabled?: boolean; }

function ActionButtons({ onHit, onStand, disabled = false }: ActionButtonsProps) {
  return <div className="action-buttons"><button className="hit-button" onClick={onHit} disabled={disabled}>HIT</button><button className="stand-button" onClick={onStand} disabled={disabled}>STAND</button></div>;
}

export default ActionButtons;
