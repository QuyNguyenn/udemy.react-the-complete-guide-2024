import { useContext } from 'react';
import { currencyFormatter } from '../util/formatting';
import Button from './common/Button';
import CartContext from '../context/CartContext';

export default function MealItem({ meal }) {
	const { addItem } = useContext(CartContext);

	function handleAddMealToCart(meal) {
		addItem(meal);
	}

	return (
		<li className="meal-item">
			<article>
				<img src={`http://localhost:3000/${meal.image}`} alt="Meal Image" />
				<div>
					<h3>{meal.name}</h3>
					<p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
					<p className="meal-item-description">{meal.description}</p>
				</div>
				<p className="meal-tem-actions">
					<Button onClick={() => handleAddMealToCart(meal)}>Add to Cart</Button>
				</p>
			</article>
		</li>
	);
}
