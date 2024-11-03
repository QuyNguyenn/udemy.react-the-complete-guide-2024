import { useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { fetchMeals } from '../http/http';
import Meals from './Meals';

export default function Menu() {
	const { meals, setMeals, addToCart } = useContext(AppContext);
	const { isFetching, fetch, error } = useFetch(fetchMeals, setMeals);

	useEffect(() => {
		fetch();
	}, [fetch]);

	return (
		<>
			{isFetching && <p className="center">Fetching meals...</p>}
			{!isFetching && !error && <Meals meals={meals} onAddToCart={addToCart} />}
			{!isFetching && error && <p className="center">{error.message}</p>}
		</>
	);
}
