import React, { createContext, useReducer, FC } from 'react';
import { AppContextType, AppReducer, initialApp } from './App.reducer';
import { AppRouter } from '../AppRouter/AppRouter';


export const AppContext = createContext<AppContextType>({
  dispatch: () => null,
  state: initialApp,
});

export const App: FC = () => {
  const [state, dispatch] = useReducer(AppReducer, initialApp);
  return (
    <AppContext.Provider value={{state, dispatch}}>
      <AppRouter />
    </AppContext.Provider>
  );
};
