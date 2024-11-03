import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
	{
		id: crypto.randomUUID(),
	},
	{
		id: crypto.randomUUID(),
	},
	{
		id: crypto.randomUUID(),
	},
	{
		id: crypto.randomUUID(),
	}
]

function EventsPage() {
	return (
		<>
			<h1>Events</h1>
			<ul>
					{DUMMY_EVENTS.map(event => 
						<li key={event.id}>
							<Link to={event.id}>{event.id}</Link>
						</li>
					)}
			</ul>
		</>
	)
}

export default EventsPage;