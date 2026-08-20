import { useContext } from 'react';
import { PortfolioContentContext } from './PortfolioContent';

export function usePortfolioContent() {
  return useContext(PortfolioContentContext);
}

