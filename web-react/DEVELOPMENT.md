# Development Guide

This project is built with Vite + React + TypeScript.

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Radix UI** - Component primitives

## Available Scripts

### `npm run dev`

Runs the app in development mode.
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### `npm run build`

Builds the app for production to the `dist` folder.
Optimized and minified for deployment.

### `npm run lint`

Runs ESLint to check code quality and style.

### `npm run preview`

Preview the production build locally.

## Project Structure

```
src/
├── components/     # React components
├── hooks/         # Custom hooks
├── types/         # TypeScript interfaces
└── lib/           # Utilities
```

## Development Notes

- All components use TypeScript interfaces for props
- Tailwind CSS for styling with custom design system
- Framer Motion for smooth animations
- Custom hooks for data fetching and state management