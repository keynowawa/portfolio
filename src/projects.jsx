import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';
import './index.css';
import App from './App';
import PortfolioContentProvider from './context/PortfolioContentProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PortfolioContentProvider>
      <App />
      <Analytics />
    </PortfolioContentProvider>
  </StrictMode>,
);
