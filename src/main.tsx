import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRouter, createHashHistory, RouterProvider } from '@tanstack/react-router';
import './index.css';

// Import the generated route tree
import { routeTree } from './routeTree.gen';

// Hash history works with both file:// and custom app:// protocols
const hashHistory = createHashHistory();

// Create a new router instance
const router = createRouter({ routeTree, history: hashHistory });

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
