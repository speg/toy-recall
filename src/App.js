import React, {useReducer, useEffect, useContext } from 'react';
import './App.css';
import {reducer, initState} from './data';
import useDebug from './hooks/debug';

// components
import Header from './components/header';
import SearchControl from './components/search';
import SearchResults from './components/results';

// context
import { DispatchContext } from './contexts';


const fetch = window.fetch ? window.fetch : () => {console.warn('No fetcher found!!')}

//http://cfps.chip/weather/api/alpha/?point=CYOW|site|-75.667,45.323&alpha=sigmet&alpha=notam&alpha=metar&alpha=taf&alpha=pirep&alpha=upperwind&notam_choice=default&upperwind_choice=both&_=1581702244064
const base = 'http://192.168.1.11:5000/alpha/';
function queryApi(query, dispatch) {
  const uri = `${base}?point=${query}`
  fetch(uri).then(data => {
    data.json().then(j => {
      dispatch({type: 'new-results', value: j})
    })
  }).catch(error => {
      dispatch({type: 'network-error'})
  })
}

function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  useDebug(state);

  useEffect(() => {
    console.log('Found a pending searchQuery:', state.searchQuery);
    if (state.searchQuery) {
      queryApi(state.searchQuery, dispatch)
    }
  }, [state.searchQuery]);


  console.log(state.network)
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
