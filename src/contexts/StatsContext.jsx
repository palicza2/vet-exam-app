import React, { createContext, useContext } from 'react';
import { useStats } from '../hooks/useStats';
import { useAuthContext } from './AuthContext';

const StatsContext = createContext(null);

export const StatsProvider = ({ children }) => {
  const { user } = useAuthContext();
  const stats = useStats(user);
  
  return (
    <StatsContext.Provider value={stats}>
      {children}
    </StatsContext.Provider>
  );
};

export const useStatsContext = () => {
  const context = useContext(StatsContext);
  if (!context) {
    throw new Error('useStatsContext must be used within a StatsProvider');
  }
  return context;
};
