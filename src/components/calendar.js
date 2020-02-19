import React, { useRef, useEffect } from 'react';

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'




function Calendar(props) {
	const calendarRef = useRef(null);

	useEffect( () => {
		if (calendarRef.current) {
			calendarRef.current.calendar.refetchEvents();
		}
	});

	return <div className="grow-3">
		<FullCalendar
			ref={calendarRef}
			plugins={[ dayGridPlugin ]}
			defaultView="dayGridWeek"
			events="http://localhost:5000/events/"
		/>
	</div>
}

export default React.memo(Calendar);