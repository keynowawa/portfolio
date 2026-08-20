import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import BookMeetingPage from './components/BookMeetingPage';
import PortfolioContentProvider from './context/PortfolioContentProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PortfolioContentProvider>
      <BookMeetingPage />
    </PortfolioContentProvider>
  </StrictMode>,
);
