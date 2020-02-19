
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
			state.groups = state.groups.map(p => {
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
	groups: [
			{name: 'St-Hubert', selected: true},
		]
};


export { reducer, initState }