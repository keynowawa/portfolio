import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import PortfolioContentProvider from './context/PortfolioContentProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PortfolioContentProvider>
      <App />
    </PortfolioContentProvider>
  </StrictMode>,
);
