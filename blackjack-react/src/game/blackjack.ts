import Deck from "./deck";
import type { GameStatus, ICard } from "./types";
import { getHandValue, isBlackjack, isBust } from "../utils/gameUtils";

class BlackjackGame {
	private deck = new Deck();
	playerHand: ICard[] = [];
	dealerHand: ICard[] = [];
	balance: number;
	bet = 0;
	status: GameStatus = "idle";

	constructor(initialBalance = 1000) {
		this.balance = initialBalance;
	}

	startRound(bet: number): void {
		if (!Number.isInteger(bet) || bet <= 0 || bet > this.balance) return;
		this.balance -= bet;
		this.bet = bet;
		this.deck.reset();
		this.playerHand = this.deck.deal(2);
		this.dealerHand = this.deck.deal(2);
		const playerBlackjack = isBlackjack(this.playerHand);
		const dealerBlackjack = isBlackjack(this.dealerHand);
		if (playerBlackjack && dealerBlackjack) {
			this.balance += bet;
			this.status = "push";
		} else if (playerBlackjack) {
			this.balance += bet * 2.5;
			this.status = "blackjack";
		} else if (dealerBlackjack) {
			this.status = "lost";
		} else {
			this.status = "playing";
		}
	}

	hit(): void {
		if (this.status !== "playing") return;
		this.playerHand = [...this.playerHand, ...this.deck.deal(1)];
		if (isBust(this.playerHand)) this.status = "bust";
	}

	stand(): void {
		if (this.status !== "playing") return;
		this.status = "dealer-turn";
		while (getHandValue(this.dealerHand) < 17) {
			this.dealerHand = [...this.dealerHand, ...this.deck.deal(1)];
		}
		this.resolveRound();
	}

	private resolveRound(): void {
		const playerValue = getHandValue(this.playerHand);
		const dealerValue = getHandValue(this.dealerHand);
		if (dealerValue > 21 || playerValue > dealerValue) {
			this.balance += this.bet * 2;
			this.status = "won";
		} else if (playerValue === dealerValue) {
			this.balance += this.bet;
			this.status = "push";
		} else {
			this.status = "lost";
		}
	}

	resetGame(): void {
		this.playerHand = [];
		this.dealerHand = [];
		this.bet = 0;
		this.status = "idle";
	}
}

export default BlackjackGame;
