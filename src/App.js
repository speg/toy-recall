import React, {useReducer, useEffect } from 'react';
import './App.css';
import {reducer, initState} from './data';
import useDebug from './hooks/debug';

// components
import Header from './components/header';
import Calendar from './components/calendar';
import ReservationForm from './components/form';

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
          <Header groups={state.groups} />
          <div className="flex">
            <Calendar />
            <ReservationForm results={state.results} groups={state.groups} />
          </div>
      </DispatchContext.Provider>
    </div>
  );
}

export default App;
