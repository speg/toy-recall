function useDebug(...stuff) {
	// a silly hook that spits out props.
	// console.info(stuff)
	console.table(stuff.length === 1 ? stuff[0] : stuff);
	// for (let i of stuff) {
	// 	console.table(i);
	// }
}


export default useDebug;