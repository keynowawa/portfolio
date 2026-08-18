import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import BookMeetingPage from './components/BookMeetingPage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookMeetingPage />
  </StrictMode>,
);
