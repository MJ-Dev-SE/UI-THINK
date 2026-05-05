import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { UITerm, AIMessage } from '../types';

interface AppState {
  selectedTermId: string | null;
  history: AIMessage[];
  theme: 'dark' | 'light';
  isSidebarOpen: boolean;
  isAIPanelOpen: boolean;
}

type AppAction =
  | { type: 'SET_TERM'; payload: string }
  | { type: 'ADD_MESSAGE'; payload: AIMessage }
  | { type: 'SET_THEME'; payload: 'dark' | 'light' }
  | { type: 'TOGGLE_SIDEBAR' }
  | { type: 'TOGGLE_AI_PANEL' }
  | { type: 'CLEAR_HISTORY' };

const initialState: AppState = {
  selectedTermId: 'grid', // Default starting term
  history: [],
  theme: (localStorage.getItem('theme') as 'dark' | 'light') || 'dark',
  isSidebarOpen: true,
  isAIPanelOpen: true,
};

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | undefined>(undefined);

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_TERM':
      localStorage.setItem('lastViewedTerm', action.payload);
      return { ...state, selectedTermId: action.payload };
    case 'ADD_MESSAGE':
      const newHistory = [...state.history, action.payload];
      localStorage.setItem('chatHistory', JSON.stringify(newHistory));
      return { ...state, history: newHistory };
    case 'SET_THEME':
      localStorage.setItem('theme', action.payload);
      return { ...state, theme: action.payload };
    case 'TOGGLE_SIDEBAR':
      return { ...state, isSidebarOpen: !state.isSidebarOpen };
    case 'TOGGLE_AI_PANEL':
      return { ...state, isAIPanelOpen: !state.isAIPanelOpen };
    case 'CLEAR_HISTORY':
      localStorage.removeItem('chatHistory');
      return { ...state, history: [] };
    default:
      return state;
  }
}

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, {
    ...initialState,
    history: JSON.parse(localStorage.getItem('chatHistory') || '[]').map((m: any) => ({
      ...m,
      timestamp: new Date(m.timestamp)
    })),
    selectedTermId: localStorage.getItem('lastViewedTerm') || 'grid'
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', state.theme === 'dark');
  }, [state.theme]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within AppProvider');
  return context;
};
