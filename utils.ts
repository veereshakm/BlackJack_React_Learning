import { ICard } from "./types";
import promptSync from "prompt-sync";
const prompt = promptSync();

export function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function getHandValue(cards: ICard[]): number {
  let total = 0;
  let aces = 0;

  for (const card of cards) {
    if (card.value === 1) {
      aces++;
      total += 11;
    } else if (card.value >= 11) {
      total += 10;
    } else {
      total += card.value;
    }
  }

  while (total > 21 && aces > 0) {
    total -= 10;
    aces--;
  }

  return total;
}

export function getDecision(): "hit" | "stand" {
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

export function getBet(balance: number): number {
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

export function getStrHand(hand: ICard[], hideSecondCard: boolean = false): string {
  if (hideSecondCard && hand.length > 1) {
    return `${hand[0].getName()}${hand[0].suit} + hidden`;
  }

  return hand
    .map((card) => `${card.getName()}${card.suit}`)
    .join(", ");
}