import { memo } from 'react';

const Meals = memo(function Meals({ meals, onAddToCart }) {
	return (
		<ul id="meals">
			{meals.map((meal) => {
				return (
					<li key={meal.id} className="meal-item">
						<article>
							<img src={`http://localhost:3000/${meal.image}`} />
							<h3>{meal.name}</h3>
							<p className="meal-item-price">{meal.price}$</p>
							<p className="meal-item-description">{meal.description}</p>
							<div className="meal-item-actions">
								<button className="button" onClick={() => onAddToCart(meal.id)}>
									Add to Cart
								</button>
							</div>
						</article>
					</li>
				);
			})}
		</ul>
	);
});

export default Meals;
