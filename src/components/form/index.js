import React from 'react';
import useDispatch from '../../hooks/dispatch';

import './form.css';


function ReservationForm (props) {
	const dispatch = useDispatch();
	
	return <div className="grow">
		<form className="flex flex-column" onSubmit={e => e.preventDefault() || dispatch('form-submit')}>
			<h2>Reservation</h2>
			<input type="text" name="name" placeholder="Name.." />
			<input type="text" name="phone" placeholder="Phone.." />
			<input type="text" name="email" placeholder="Email.." />
			<input type="text" name="acid" placeholder="ACID.." />
			<span className="flex">
				<button className="grow" type="submit">Save</button>
				<button className="grow" type="submit">Cancel</button>
				<button className="grow" type="submit">Delete</button>
			</span>
		</form>
	</div>
}


export default ReservationForm;