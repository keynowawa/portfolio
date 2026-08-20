import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';
import './index.css';
import BookMeetingPage from './components/BookMeetingPage';
import PortfolioContentProvider from './context/PortfolioContentProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PortfolioContentProvider>
      <BookMeetingPage />
      <Analytics />
    </PortfolioContentProvider>
  </StrictMode>,
);
