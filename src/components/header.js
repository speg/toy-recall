import React from 'react';
import useDispatch from '../hooks/dispatch';

const type = 'product-toggle';

function GroupHeader({name, selected}) {
	const dispatch = useDispatch();
	const className = `grow ${selected ? 'selected' : ''}`
	return <li onClick={e => dispatch({type, value: name})} className={className}>{name}</li>
}



function Header ({groups}) {
	return <header>
		<ol className="product-selector grow">
			{groups.map(p => <GroupHeader key={p.name} name={p.name} selected={p.selected} />)}
		</ol>
	</header>
}


export default React.memo(Header);