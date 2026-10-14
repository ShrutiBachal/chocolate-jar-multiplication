# Chocolate Jar Multiplication

A visual-first, interactive multiplication activity for early learners. Children open equal-sized chocolate groups one by one, tap each chocolate to collect it, and only then discover repeated addition and multiplication.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite. For a production build, run `npm run build`.

## StackBlitz

Create a React + Vite project, then replace `package.json`, `index.html`, and the `src` files with those from this ZIP. Alternatively import the ZIP as a new project.

## Gameplay

1. Tap the large jar to reveal one group.
2. Tap each chocolate to collect it in the basket.
3. Repeat until all groups are open and all chocolates collected.
4. Tap **Discover the total** to see the repeated addition and multiplication expressions.
5. Try again or advance through five sample levels.

## Customization

Edit the `levels` array at the top of `src/App.jsx` to add new group counts and group sizes. The app uses CSS-drawn chocolates and a jar, so no external image assets or paid services are needed.

## Note

This is a standalone prototype, not yet integrated with the Tenali repository. It uses minimal instructional text, plus an animated pointer to the jar.
