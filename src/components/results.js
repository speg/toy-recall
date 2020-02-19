import React from 'react';

function formatNotam(text) {
	// NOTAMs are json.. raw/english/french
	// TODO: check language
	try {
		const json = JSON.parse(text	);
		return json.raw;
	} catch (E) {
		// NOTAMJ are not JSON
		// console.warn('Error parsing', text);
	}
	return text;
}

function formatTextForType(type, text) {
	switch (type) {
		case 'notam':
			return formatNotam(text);
		default:
			break;
	}
	return text;
}

function Result({type, pk, location, startValidity, text, hasError, position}) {
	return <pre>{formatTextForType(type, text)}</pre>
}

function ResultInfo({now, count, messages, filtered}) {
	const sum = Object.values(count).reduce((acc, current) => acc + current, 0);
	return <p>Displaying {filtered} of {sum} results.</p>
}

function SearchResults({results, products}) {
	if (!results) {
		return null;
	}

	const active = products.reduce((acc, current) => {
		acc[current.name] = current.selected;
		return acc;
	}, {});	//TODO ntoam: ture , but maybe turn into object later
	const filtered = results.data.filter(d => active[d.type])

	return <>
		<ResultInfo {...results.meta} filtered={filtered.length} />
		<ul className="search-results">
			{filtered.map((d, i) => <li key={i}><Result {...d} /></li>)}
		</ul>
	</>
}

export default SearchResults;