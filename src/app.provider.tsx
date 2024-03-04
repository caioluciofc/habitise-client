'use client'; // This is a client component 👈🏽

import React, { createContext, ReactNode, useContext, useEffect, useRef } from 'react';
import { AppProviderType } from './app.provider.types';
import useHabitsState from './states/habits.state';
import DevelopmentError from './errors/DevelopmentError';

export const AppContext = createContext<AppProviderType | undefined>(undefined);

export function useAppContext() {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new DevelopmentError('You are trying to useAppContext outside App Provider.');
  }

  return context;
}

interface Props {
  children: ReactNode;
}

export default function AppProvider({ children }: Props) {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦   ╔═╗╔╦╗╔═╗╔╦╗╔═╗╔═╗
  //  ║║║║║ ║ ║╠═╣║   ╚═╗ ║ ╠═╣ ║ ║╣ ╚═╗
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝ ╚═╝ ╩ ╩ ╩ ╩ ╚═╝╚═╝
  const [habitsState, habitsActions] = useHabitsState();

  useEffect(() => {
    habitsActions.fetchUserHabits();
    habitsActions.fetchUserTrackedHabits();
  }, []);

  //  ╔═╗╔╦╗╔═╗╔╦╗╔═╗╔═╗
  //  ╚═╗ ║ ╠═╣ ║ ║╣ ╚═╗
  //  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝╚═╝
  const AppStates = {
    habitsState,
  };

  //  ╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  const AppActions = {
    ...habitsActions,
  };

  return (
    <AppContext.Provider value={{ ...AppStates, ...AppActions }}>{children}</AppContext.Provider>
  );
}
