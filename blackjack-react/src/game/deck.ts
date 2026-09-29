import Card from "./card";
import type { Suit } from "./types";

export default class Deck {
	private cards: Card[] = [];

	constructor() {
		this.reset();
	}

	reset(): void {
		const suits: Suit[] = ["♠", "♥", "♦", "♣"];
		this.cards = suits.flatMap((suit) =>
			Array.from({ length: 13 }, (_, index) => new Card(index + 1, suit)),
		);
		for (let index = this.cards.length - 1; index > 0; index -= 1) {
			const swapIndex = Math.floor(Math.random() * (index + 1));
			[this.cards[index], this.cards[swapIndex]] = [this.cards[swapIndex], this.cards[index]];
		}
	}

	deal(count: number): Card[] {
		return this.cards.splice(0, count);
	}
}
