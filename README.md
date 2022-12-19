# arknights-operator-data

Project from our college to make a website that use React.js and Tailwind

This project purposes to display Operator data in the Arknights.

APIs that we use :

Main APIs = https://rhodesapi.cyclic.app/api/operator (Source: https://github.com/wesngu28/rhodesapi)

~Additional APIs (For Logo and Operator Icon) = ~
~- https://dasewasia10.github.io/AKLogo-Addition/data/operator_icon.json~
~- https://dasewasia10.github.io/AKLogo-Addition/data/faction.json~
~- https://dasewasia10.github.io/AKLogo-Addition/data/class.json~ Not longer to be used here

Feature on plan :
- Filtering
- Searching
- Fetch Data (like information about Operator)
- Sorting
~- Favorite~

Project Tree (not include .git and .gitignore)
```
ArKnights-Operator-Data
├─ index.html
├─ package-lock.json
├─ package.json
├─ postcss.config.cjs
├─ public
│  └─ vite.svg
├─ README.md
├─ src
│  ├─ api
│  │  └─ axios.jsx
│  ├─ App.css
│  ├─ App.jsx
│  ├─ assets
│  │  └─ Rhodes_Island.svg
│  ├─ components
│  │  ├─ DetailCard.jsx
│  │  ├─ FilterDropdown.jsx
│  │  ├─ ListOperator.jsx
│  │  ├─ Search.jsx
│  │  └─ SortDropdown.jsx
│  ├─ index.css
│  ├─ main.jsx
│  ├─ output.css
│  └─ page
│     ├─ Card.jsx
│     ├─ ChooseMenu.jsx
│     ├─ DetailOperator.jsx
│     ├─ First.jsx
│     └─ SkinOperator.jsx
├─ tailwind.config.cjs
└─ vite.config.js

```