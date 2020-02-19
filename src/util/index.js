const fetch = window.fetch;

//http://cfps.chip/weather/api/alpha/?point=CYOW|site|-75.667,45.323&alpha=sigmet&alpha=notam&alpha=metar&alpha=taf&alpha=pirep&alpha=upperwind&notam_choice=default&upperwind_choice=both&_=1581702244064
const base = 'http://localhost:5000/alpha/';

async function queryApi(query, dispatch) {
  const uri = `${base}?point=${query}` 
  try {
    const data = await fetch(uri);
    const json = await data.json();
    dispatch({type: 'new-results', value: json})
  } catch (error) {
    dispatch({type: 'network-error'})
  }
}


export {queryApi};