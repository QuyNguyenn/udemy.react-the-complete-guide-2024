import { createBrowserRouter } from "react-router-dom";
import RootLayout from '../pages/Root';
import EventsLayout from "../pages/EventsLayout";
import HomePage from '../pages/Home';
import EventsPage from "../pages/Events";
import EventDetailPage from "../pages/EventDetail";
import NewEventPage from '../pages/NewEvent';
import EditEventPage from '../pages/EditEvent';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{ index: true , path: '', element: <HomePage /> },
			{ 
				path: 'events',
				element: <EventsLayout />,
				children: [
					{ index: true, path: '', element: <EventsPage /> },
					{ path: ':eventId', element: <EventDetailPage /> },
					{ path: 'new', element: <NewEventPage /> },
					{ path: ':eventId/edit', element: <EditEventPage /> }
				]
			}
		]
	}
])

export default router;