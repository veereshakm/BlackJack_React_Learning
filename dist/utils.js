"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStrHand = exports.getBet = exports.getDecision = exports.getHandValue = exports.shuffleArray = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
exports.shuffleArray = shuffleArray;
function getHandValue(cards) {
    let total = 0;
    let aces = 0;
    for (const card of cards) {
        if (card.value === 1) {
            aces++;
            total += 11;
        }
        else if (card.value >= 11) {
            total += 10;
        }
        else {
            total += card.value;
        }
    }
    while (total > 21 && aces > 0) {
        total -= 10;
        aces--;
    }
    return total;
}
exports.getHandValue = getHandValue;
function getDecision() {
    while (true) {
        const input = prompt("Do you want to hit or stand? ").trim().toLowerCase();
        if (input === "hit" || input === "h") {
            return "hit";
        }
        if (input === "stand" || input === "s") {
            return "stand";
        }
        console.log("Please enter 'hit' or 'stand'.");
    }
}
exports.getDecision = getDecision;
function getBet(balance) {
    while (true) {
        const input = prompt(`How much do you want to bet? You have $${balance}: `).trim();
        const bet = Number(input);
        if (!Number.isInteger(bet) || bet <= 0) {
            console.log("Bet must be a positive whole number.");
            continue;
        }
        if (bet > balance) {
            console.log(`You cannot bet more than your balance of $${balance}.`);
            continue;
        }
        return bet;
    }
}
exports.getBet = getBet;
function getStrHand(hand, hideSecondCard = false) {
    if (hideSecondCard && hand.length > 1) {
        return `${hand[0].getName()}${hand[0].suit} + hidden`;
    }
    return hand
        .map((card) => `${card.getName()}${card.suit}`)
        .join(", ");
}
exports.getStrHand = getStrHand;
