import React, { useState } from 'react';
import useDispatch from '../hooks/dispatch';

const type = 'prepare-search';

// function SearchControl () {
// 	const [currentValue, setCurrentValue] = useState("");
// 	const [currentQuery, setQuery] = useState("");
// 	const dispatch = useDispatch();
	

// 	const addQueryItem = e => {
// 		if (e.keyCode === 13) {
// 			setQuery(s => s ? s + " " + currentValue : currentValue);
// 			setCurrentValue("");
// 		}
// 	};

// 	console.log(currentQuery);
// 	return <>
// 		{currentQuery ? <small>{currentQuery}</small> : null}
// 		<input 
// 			value={currentValue} 
// 			className="grow" 
// 			type="search" 
// 			placeholder="Add aerodromes" 
// 			onChange={e => setCurrentValue(e.target.value)} 
// 			onKeyDown={addQueryItem}
// 			autoFocus
// 		/>
// 		<button onClick={e => dispatch({type, value: currentQuery || currentValue})}>Search</button>
// 	</>;
// }

function ReservationForm (props) {
	return <div className="grow">
		<form class="flex flex-column">
			<input type="text" />
			<input type="text" />
			<input type="text" />
			<input type="text" />
		</form>
	</div>
}


export default ReservationForm;