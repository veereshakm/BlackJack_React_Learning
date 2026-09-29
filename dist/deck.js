"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const card_1 = __importDefault(require("./card"));
const types_1 = require("./types");
const utils_1 = require("./utils");
class Deck {
    constructor() {
        this.deck = [];
    }
    reset() {
        this.deck = [];
        for (const suit of Object.values(types_1.Suit)) {
            for (let value = 1; value <= 13; value++) {
                this.deck.push(new card_1.default(value, suit));
            }
        }
        this.deck = (0, utils_1.shuffleArray)(this.deck);
    }
    deal(num) {
        const hand = [];
        for (let i = 0; i < num; i++) {
            const card = this.deck.shift();
            if (card) {
                hand.push(card);
            }
        }
        return hand;
    }
}
exports.default = Deck;
