# BlackJack Game React Learn

A beginner-friendly blackjack game project built with TypeScript and React. The repository contains a console-based blackjack implementation and a browser-based version created with React + Vite, making it a great example of turning game logic into a user interface.

## Overview

This project is designed to help learn:

- Core blackjack game rules
- TypeScript logic and object modeling
- React state management
- Component-driven UI design
- Card dealing, scoring, and win/loss logic

The game follows standard blackjack rules, including betting, hit and stand actions, dealer logic, handling of aces, and winners/ties.

## Demo / Project Goals

This project demonstrates how an initial command-line game can evolve into a polished React app while keeping the core logic reusable and structured.

## Features

- Randomized deck generation and shuffling
- Blackjack scoring with ace handling
- Player balance and betting system
- Hit, stand, bust, and push logic
- Dealer turn logic with a 17 minimum
- Blackjack detection and payout handling
- Responsive React UI for gameplay actions
- Structured component-based application layout

## Tech Stack

- TypeScript
- React
- Vite
- CSS
- Node.js

## Blackjack Rules Implemented

- Each player starts with two cards
- Number cards are worth their face value
- Face cards count as 10
- Aces count as 11 unless the total would exceed 21, then they count as 1
- Players can choose to hit or stand
- Dealer must draw until reaching at least 17
- If a hand exceeds 21, it busts
- A tie is treated as a push
- Standard wins pay 1:1
- Blackjack pays 3:2

## Project Structure

```text
Template/
├─ app.ts                    # Console-version blackjack game
├─ card.ts                   # Card model
├─ deck.ts                   # Deck generation and shuffling logic
├─ types.ts                  # Shared TypeScript types and enums
├─ utils.ts                  # Betting, scoring, and game helper functions
├─ README.md                 # Project documentation
├─ blackjack-react/          # React + Vite front-end version
│  ├─ src/                   # App source files
│  ├─ public/                # Static assets
│  ├─ package.json           # React app dependencies and scripts
│  ├─ vite.config.ts         # Vite configuration
│  ├─ index.html             # App entry page
│  └─ README.md              # React app notes
├─ tsconfig.json             # Root TypeScript config
└─ package.json              # Root project setup
```

## Console Version

The root folder contains a TypeScript command-line blackjack game that handles the main gameplay logic. It is useful for learning how the rules work before building the UI.

### Console game files

- `app.ts` – main game loop
- `deck.ts` – deck creation and shuffling
- `card.ts` – individual card representation
- `utils.ts` – betting and hand-value utilities
- `types.ts` – interfaces and enum definitions

### Run the console version

```bash
npm install
npx tsc
node app.js
```

## React Version

The `blackjack-react` folder contains the browser-based game interface. This version adds visual cards, a betting panel, action buttons, and a full game table layout.

### Run the React app

```bash
cd blackjack-react
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal, typically:

```text
http://localhost:5173
```

### Build for production

```bash
cd blackjack-react
npm run build
```

This project has been verified to build successfully using the Vite production build command.

## Learning Outcomes

This project is a useful learning exercise for:

- TypeScript classes and interfaces
- Game logic design
- React hooks and component state
- Structuring a front-end app around a rules engine
- Working with UI events and updates

## Future Improvements

Possible enhancements include:

- Split and double-down actions
- Card animations and sound effects
- Better bankroll history and statistics
- Responsive mobile improvements
- More polished game result messages and UI states

## Summary

This repository is a practical blackjack project that demonstrates how game logic can be built from scratch and upgraded into a modern React interface. It is clean, educational, and easy to extend for learning and experimentation.

## License

This project is for learning and educational purposes.
