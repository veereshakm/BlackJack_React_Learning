# BlackJack Game React Learn

A learning-focused blackjack frontend project built to improve React and TypeScript skills while creating a complete, interactive application from a game engine.

## Overview

This project was built with a clear purpose: learn React and TypeScript in parallel while creating a real product-like project instead of studying isolated examples.

The repository combines two versions of the same game:

- A TypeScript console-based blackjack game for the core rules and logic
- A React + Vite frontend that turns that logic into a playable browser game

The goal is not just to build blackjack. The goal is to practice the actual skills used in modern frontend development: component design, state flow, event handling, reusable logic, UI composition, and building a maintainable project structure.

## Why this project exists

This project is a practical learning exercise for understanding how a frontend application is built from the ground up.

It demonstrates that:

- Game logic can be separated from UI logic
- React can render and update the interface based on state changes
- User actions trigger business logic and re-render the screen
- Components can be broken into reusable pieces
- TypeScript makes data flow and contracts clearer

The blackjack game is the subject, but React is the real learning platform.

## What I built

The application includes:

- betting and balance management
- deck creation and shuffling
- card dealing and scoring
- hit / stand actions
- dealer logic
- blackjack detection
- bust, push, and win/loss results
- a polished table-style UI built with React components

## Project goals

### Primary goal
Build a complete Blackjack frontend using React and TypeScript while learning how real UI applications are structured.

### Secondary goal
Understand how frontend components communicate with one another and how state flows through an application.

## Tech stack

- React
- TypeScript
- Vite
- CSS
- Node.js

## Architecture

This project follows a clean separation of concerns:

- Game logic handles the rules of Blackjack
- React state and hooks connect the game logic to the UI
- Components display the game and react to user actions

### Core structure

```text
src/
├── components/
│   ├── ActionButtons/
│   ├── BettingPanel/
│   ├── Card/
│   ├── GameResult/
│   ├── GameTable/
│   ├── Hand/
│   └── Header/
├── game/
│   ├── blackjack.ts
│   ├── card.ts
│   ├── deck.ts
│   └── types.ts
├── hooks/
│   └── useBlackjack.ts
├── utils/
│   └── gameUtils.ts
├── App.tsx
├── App.css
├── index.css
├── main.tsx
└── assets/
```

This structure matters because it keeps the project organized and easy to understand:

- `components` = UI parts
- `game` = domain rules and data model
- `hooks` = React state orchestration
- `utils` = reusable calculations

## Gameplay rules implemented

- Each player starts with two cards
- Number cards count as their face value
- Face cards count as 10
- Aces count as 11 unless that would cause a bust, then they count as 1
- Players may hit or stand
- Dealer must hit until reaching at least 17
- A hand above 21 is a bust
- A tie is a push
- Standard wins pay 1:1
- Blackjack pays 3:2

## Learning outcomes

This project teaches practical React and TypeScript concepts such as:

- JSX and component structure
- Props and data flow
- `useState` for UI state
- Event handling for click and form actions
- Conditional rendering
- Rendering lists with `map()` and keys
- Component composition
- Custom hooks
- Separating business logic from UI
- Structuring a frontend application for scale

## React concepts practiced

### 1. Components
The screen is split into reusable parts such as `Header`, `Hand`, `Card`, `BettingPanel`, `GameTable`, and `GameResult`.

### 2. Props
Data and behavior are passed from parent components to child components.

### 3. State
The game state changes when the player places a bet, hits, stands, or starts a new round.

### 4. Events
UI interactions such as DEAL, HIT, and STAND trigger updates in the application.

### 5. Conditional rendering
The app displays different UI states such as betting, playing, won, lost, push, and bust.

### 6. Custom hooks
`useBlackjack` acts as the bridge between the game logic and the React rendering layer.

## Project flow

The data flow is a critical learning concept for this project:

1. The user clicks a button or selects a bet
2. A callback function is triggered
3. The parent component calls the game action
4. The game state changes
5. React re-renders the UI
6. Updated cards, totals, and status are displayed

This pattern is a foundation for real-world frontend development.

## Folder and file overview

### Root project

- `app.ts` – console blackjack game logic
- `card.ts` – single card model
- `deck.ts` – deck generation and shuffling
- `types.ts` – shared TypeScript interfaces and enums
- `utils.ts` – bet and hand calculations

### React app

- `App.tsx` – top-level app composition
- `main.tsx` – app bootstrap
- `components/` – all visual UI pieces
- `game/` – blackjack rules engine
- `hooks/useBlackjack.ts` – React state coordination
- `utils/gameUtils.ts` – reusable game calculations

## Run the project

### Install dependencies

```bash
npm install
```

### Run the console version

```bash
npx tsc
node app.js
```

### Run the React app

```bash
cd blackjack-react
npm install
npm run dev
```

Then open the local localhost URL shown in the terminal, commonly:

```bash
http://localhost:5173
```

### Production build

```bash
cd blackjack-react
npm run build
```

## What this project demonstrates

This project shows I can:

- build a game engine with TypeScript
- structure a frontend project cleanly
- connect logic to UI using React state
- create reusable components
- manage user interaction and updates
- build a project that is both functional and educational

## Future improvements

Planned or possible enhancements include:

- split and double-down actions
- card animations and sounds
- betting history and statistics
- improved responsive mobile styling
- better visual polish and result handling
- persistent balance using local storage
- unit tests for game logic

## Summary

This project is more than a blackjack game. It is a portfolio-style learning project that demonstrates how frontend engineering is built in practice.

It showcases the ability to move from logic to UI, from plain TypeScript to React, and from isolated concepts to a complete project with real interaction and clear architecture.

The most important result is not just that the game works, but that the project proves the learning journey: React and TypeScript were developed in parallel while building something meaningful, practical, and visually interactive.

## License

This project is intended for learning, portfolio, and educational purposes.
