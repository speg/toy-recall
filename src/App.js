import React, {useReducer} from 'react';
import './App.css';
import {reducer, initState} from './data';
import useDebug from './hooks/debug';

// components
import Header from './components/header';
import Calendar from './components/calendar';
import ReservationForm from './components/form';
import NetworkError from './components/network';

// context
import { DispatchContext } from './contexts';

function App() {
  
  const [state, dispatch] = useReducer(reducer, initState);
  useDebug(state);
  
  return (
    <div className="app">
      {state.network === false ? <NetworkError /> : null}
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
