# Paradise Nursery 🌿

A responsive plant-shop shopping cart application built with React, React Router, Redux Toolkit, and Vite.

## Features

- Landing page with company introduction and Get Started call to action
- About Us page with the Paradise Nursery story
- Plant catalogue organized into three categories
- Six unique plants in each category (18 plants total)
- Add-to-cart buttons disable after a plant is added
- Dynamic cart quantity in the navigation bar
- Cart quantity increase/decrease and item removal
- Per-item subtotals and live order total
- Checkout message and continue-shopping navigation
- Responsive layout for desktop and mobile

## Tech stack

- React 18
- React Router
- Redux Toolkit and React Redux
- Vite
- CSS

## Run locally

1. Install Node.js (LTS).
2. Open this project folder in a terminal.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL printed by Vite (usually `http://localhost:5173`).

6. Check the production build:

   ```bash
   npm run build
   ```

## Project structure

```text
paradise-nursery/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── App.jsx
    ├── App.css
    ├── main.jsx
    ├── app/
    │   └── store.js
    ├── components/
    │   ├── Navbar.jsx
    │   └── PlantCard.jsx
    ├── data/
    │   └── plants.js
    └── features/
        └── cart/
            └── CartSlice.jsx
    └── pages/
        ├── AboutUs.jsx
        ├── CartItem.jsx
        ├── Home.jsx
        └── ProductList.jsx
```

## GitHub submission links

After creating a **public** GitHub repository and pushing this project, use these URL patterns (replace `YOUR-USERNAME` and `YOUR-REPOSITORY`):

- README: `https://github.com/YOUR-USERNAME/YOUR-REPOSITORY/blob/main/README.md`
- AboutUs.jsx: `https://github.com/YOUR-USERNAME/YOUR-REPOSITORY/blob/main/src/pages/AboutUs.jsx`
- App.css: `https://github.com/YOUR-USERNAME/YOUR-REPOSITORY/blob/main/src/App.css`
- App.jsx: `https://github.com/YOUR-USERNAME/YOUR-REPOSITORY/blob/main/src/App.jsx`
- CartSlice.jsx: `https://github.com/YOUR-USERNAME/YOUR-REPOSITORY/blob/main/src/features/cart/CartSlice.jsx`
- ProductList.jsx: `https://github.com/YOUR-USERNAME/YOUR-REPOSITORY/blob/main/src/pages/ProductList.jsx`
- CartItem.jsx: `https://github.com/YOUR-USERNAME/YOUR-REPOSITORY/blob/main/src/pages/CartItem.jsx`

## Before submitting

Run `npm run build`, launch the app, and test adding plants, changing quantities, deleting an item, and navigating between pages. Update the GitHub URLs in your assignment only after the repository is public and the files are visible on GitHub.

Plant photos are loaded from Unsplash's image CDN and therefore require an internet connection.
