import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Modal from './common/Modal';

export default function CartModal({ open, onCancel, onCheckout }) {
	const { meals, cart, addToCart, removeFromCart } = useContext(AppContext);

	let cartTotal = 0;
	const cartItems = cart.map((item) => {
		const meal = meals.find((meal) => meal.id === item.mealId);
		cartTotal += Number(meal.price) * item.quantity;
		return {
			...item,
			name: meal.name
		};
	});
	cartItems.sort((a, b) => a.name.localeCompare(b.name));

	return (
		<Modal className="cart" open={open}>
			<Modal.Title>
				<h2>Your Card</h2>
			</Modal.Title>
			<Modal.Body>
				<ul>
					{cartItems.map((item) => {
						return (
							<li key={item.mealId} className="cart-item">
								<p>{item.name}</p>
								<div className="cart-item-actions">
									<button onClick={() => removeFromCart(item.mealId)}>-</button>
									{item.quantity}
									<button onClick={() => addToCart(item.mealId)}>+</button>
								</div>
							</li>
						);
					})}
				</ul>
				<p className="cart-total">${cartTotal}</p>
			</Modal.Body>
			<Modal.Action>
				<button className="text-button" onClick={onCancel}>
					Cancel
				</button>
				<button className="button" onClick={onCheckout} disabled={!cart || cart.length === 0}>
					Go to Checkout
				</button>
			</Modal.Action>
		</Modal>
	);
}
