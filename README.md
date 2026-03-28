# 🎮 React Tic-Tac-Toe

A modern, responsive Tic-Tac-Toe game built as a hands-on project to master React state management and UI styling. 

I developed this project following the official React documentation, but I took the UI a step further by implementing a custom, pixel-perfect design using **Tailwind CSS**, inspired by a custom Figma design.

## ✨ Features

- **Modern UI:** Custom color palette and clean interface inspired by Figma.
- **Responsive Design:** Fully responsive layout optimized for all screen sizes (Mobile to Desktop) using Tailwind's utility classes.
- **State Management:** Fully functional game logic, player turns, winner calculation, and draw state using React Hooks (`useState`).

## 🎨 Style Guide

### Layout

The design adapts seamlessly to various screen sizes using Tailwind breakpoints:
- Mobile: Default base sizing (Squares: 80px)
- Tablet (`md`): Squares scaled to 100px
- Desktop (`2xl`): Squares scaled to 150px

### Colors

*Custom colors configured in `tailwind.config.js`:*

- **Background:** `bg-background`
- **Game Board:** `bg-board`
- **Game Squares:** `bg-square`
- **Player Marks & Status:** `text-skyBlue` & `text-yellow`

### Typography

- **Sizes:** Responsive text sizing (`text-lg` for status, `text-3xl` for marks).
- **Weights:** Bold (`font-bold`) to ensure readability for the game status and square values.

## 🛠️ Tech Stack

- React.js
- Tailwind CSS
- HTML5 / CSS3

## 💡 Acknowledgements

- UI/UX layout inspired by a community Figma design.
- Core logic structure learned from the official [React.dev Tutorial](https://react.dev/learn/tutorial-tic-tac-toe).

> "My goal is learning and becoming better together." 🚀