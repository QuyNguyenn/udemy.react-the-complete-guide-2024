import { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Modal from './common/Modal';
import Input from './common/Input';
import { order } from '../http/http';
import { useFetch } from '../hooks/useFetch';

export default function CheckoutModal({ open, onCancel }) {
	const [checkoutSuccess, setCheckoutSuccess] = useState();
	const { meals, cart, clearCart } = useContext(AppContext);

	const { error, fetch } = useFetch(
		(orderInfo) => order(orderInfo),
		() => {
			setCheckoutSuccess(true);
		}
	);

	let total = 0;
	total = cart.reduce((prev, item) => {
		const meal = meals.find((m) => m.id === item.mealId);
		return prev + Number(meal.price);
	}, 0);

	const handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;

		if (form.reportValidity()) {
			const formData = new FormData(form);
			const customer = Object.fromEntries(formData.entries());

			const order = {
				items: [...cart],
				customer
			};

			fetch({ order });
		}
	};

	if (error) {
		throw new Error(error.message);
	}

	return (
		<>
			{checkoutSuccess === undefined && (
				<Modal className="cart" open={open}>
					<Modal.Title>
						<h2>Checkout</h2>
						<p>Total Amount: ${total}</p>
					</Modal.Title>
					<Modal.Body>
						<form id="checkout-form" onSubmit={handleSubmit} noValidate>
							<Input label="Full Name" id="checkout__name" type="text" name="name" required />
							<Input
								label="E-Mail Address"
								id="checkout__email"
								type="email"
								name="email"
								required
							/>
							<Input label="Street" id="checkout__street" type="text" name="street" required />
							<div className="control-row">
								<Input
									label="Postal Code"
									id="checkout__postal-code"
									type="text"
									name="postal-code"
									required
								/>
								<Input label="City" id="checkout__city" type="text" name="city" required />
							</div>
						</form>
					</Modal.Body>
					<Modal.Action>
						<button className="text-button" onClick={onCancel}>
							Cancel
						</button>
						<button type="submit" form="checkout-form" className="button">
							Submit Order
						</button>
					</Modal.Action>
				</Modal>
			)}
			{checkoutSuccess === true && (
				<Modal open={checkoutSuccess}>
					<Modal.Title>
						<h2>Success!</h2>
					</Modal.Title>
					<Modal.Body>
						<p>Your order was submitted successfully.</p>
						<p>We will get back to you with more details via email within the next few minutes.</p>
					</Modal.Body>
					<Modal.Action>
						<form method="dialog">
							<button className="button" onClick={clearCart}>
								Okay
							</button>
						</form>
					</Modal.Action>
				</Modal>
			)}
		</>
	);
}
