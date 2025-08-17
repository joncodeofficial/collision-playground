/* eslint-disable react-refresh/only-export-components */
import React, { use } from 'react';
import { createContext, useState } from 'react';

type GlobalProviderProps = {
  children: React.ReactNode;
};

type GlobalProviderState = {
  dimensions: number[];
  setDimensions: (dimensions: number[]) => void;
};

const INITIAL_STATE: GlobalProviderState = {
  dimensions: [50, 50],
  setDimensions: () => {},
};

const GlobalProviderContext = createContext<GlobalProviderState>(INITIAL_STATE);

export function DimensionsProvider({ children }: GlobalProviderProps) {
  const [dimensions, setDimensions] = useState<number[]>(INITIAL_STATE.dimensions);

  const value = {
    dimensions,
    setDimensions,
  };

  return <GlobalProviderContext.Provider value={value}>{children}</GlobalProviderContext.Provider>;
}

export const useGlobalStates = () => {
  const context = use(GlobalProviderContext);
  // context defined else throw error
  if (context === undefined) {
    throw new Error('useGlobalStates must be used within a GlobaProvider');
  }
  return context;
};
