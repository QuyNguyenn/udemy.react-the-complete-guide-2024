import MealItem from './MealItem';
import useHttp from '../hooks/useHttp';
import Error from './common/Error';

const url = 'http://localhost:3000/meals';
const requestConfig = { method: 'GET' };

export default function Meals() {
	const { data: loadedMeals, isLoading, error } = useHttp(url, requestConfig, []);

	if (isLoading) {
		return <p className="center">Fetching meals...</p>;
	}

	if (error) {
		return <Error title="Failed to fetch meals" message={error} />;
	}

	return (
		<ul id="meals">
			{loadedMeals.map((meal) => (
				<MealItem key={meal.id} meal={meal} />
			))}
		</ul>
	);
}
