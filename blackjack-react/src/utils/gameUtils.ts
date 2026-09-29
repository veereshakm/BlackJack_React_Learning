import type { ICard } from "../game/types";

export function getHandValue(cards: ICard[]): number {
	let total = 0;
	let aces = 0;
	for (const card of cards) {
		if (card.value === 1) {
			total += 11;
			aces += 1;
		} else {
			total += Math.min(card.value, 10);
		}
	}
	while (total > 21 && aces > 0) {
		total -= 10;
		aces -= 1;
	}
	return total;
}

export function isBlackjack(cards: ICard[]): boolean {
	return cards.length === 2 && getHandValue(cards) === 21;
}

export function isBust(cards: ICard[]): boolean {
	return getHandValue(cards) > 21;
}
