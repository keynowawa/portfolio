import { createContext } from 'react';
import { defaultSections } from '../content/editorDefaults';

export const PortfolioContentContext = createContext({ content: defaultSections, loading: false, remote: false });

