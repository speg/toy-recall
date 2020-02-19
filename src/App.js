import React, {useReducer, useEffect } from 'react';
import './App.css';
import {reducer, initState} from './data';
import useDebug from './hooks/debug';

// components
import Header from './components/header';
import SearchControl from './components/search';
import SearchResults from './components/results';

// context
import { DispatchContext } from './contexts';

//utils
import {queryApi} from './util';

function App() {
  
  const [state, dispatch] = useReducer(reducer, initState);
  useDebug(state);
  
  useEffect(() => {
    if (state.searchQuery) {
      queryApi(state.searchQuery, dispatch)
    }
  }, [state.searchQuery]);

  return (
    <div className="app">
      {state.network === false ? <small>Network Activity Failed</small> : null}
      <DispatchContext.Provider value={dispatch}>
          <Header products={state.products} />
          <SearchControl />
          <SearchResults results={state.results} products={state.products} />
      </DispatchContext.Provider>
    </div>
  );
}

export default App;
