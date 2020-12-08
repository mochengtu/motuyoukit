import React from 'react';

export interface IContext {
  state: string;
  lists: [];
  dispatch: Function;
}

export const SearchContext = React.createContext<IContext | null>(null);
