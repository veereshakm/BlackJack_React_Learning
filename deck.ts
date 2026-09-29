import Card from "./card";
import { IDealable, Suit } from "./types";
import { shuffleArray } from "./utils";

class Deck implements IDealable {
    private deck: Card[] = [];

    reset(): void {
        this.deck = [];

        for (const suit of Object.values(Suit) as Suit[]) {
            for (let value = 1; value <= 13; value++) {
                this.deck.push(new Card(value, suit));
            }
        }

        this.deck = shuffleArray(this.deck);
    }

    deal(num: number): Card[] {
        const hand: Card[] = [];

        for (let i = 0; i < num; i++) {
            const card = this.deck.shift();
            if (card) {
                hand.push(card);
            }
        }

        return hand;
    }
}

export default Deck;