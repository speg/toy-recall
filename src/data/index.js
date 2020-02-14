
function executeSearch(query) {
	// do a search. 
}

function reducer(state, action) {
	console.log('Debugging action', action);
	switch (action.type) {
		case 'network-error':
			state.network = false;
			break;
		case 'new-results':
			state.network = true;
			state.results = action.value;
			break;
		case 'product-toggle':
			state.products = state.products.map(p => {
				if (p.name === action.value) {
					p.selected = !p.selected;
				}
				return p;
			});
			break;
		case 'prepare-search':
			state.searchQuery = action.value;
			break;
		default:
			console.warn('Unmatched action', action);
		}
	return {...state};
}



const initState = {
	searchQuery: null,
	network: null,
	products: [
			{name: 'metar', selected: true},
			{name: 'notam'},
			{name: 'taf', selected: true},
			{name: 'pirep'},
		]
};


export { reducer, initState }