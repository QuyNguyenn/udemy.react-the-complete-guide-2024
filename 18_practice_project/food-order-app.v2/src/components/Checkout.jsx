import { useContext } from 'react';
import Modal from './common/Modal';
import CartContext from '../context/CartContext';
import { currencyFormatter } from '../util/formatting';
import Input from './common/Input';
import Button from './common/Button';
import UserProgressContext from '../context/UserProgressContext';
import useHttp from '../hooks/useHttp';
import Error from './common/Error';

const url = 'http://localhost:3000/orders';
const requestConfig = {
	method: 'POST',
	headers: new Headers({
		'Content-Type': 'application/json'
	})
};

export default function Checkout() {
	const { items, clearCart } = useContext(CartContext);
	const { progress, hideCheckout } = useContext(UserProgressContext);
	const { data, isLoading: isSending, error, sendRequest, clearData } = useHttp(url, requestConfig);

	const cartTotal = items.reduce((prev, item) => prev + item.price * item.quantity, 0);

	function handleClose() {
		hideCheckout();
	}

	function handleSubmit(event) {
		event.preventDefault();

		const formData = new FormData(event.target);
		const customerData = Object.fromEntries(formData.entries());

		sendRequest(
			JSON.stringify({
				order: {
					items,
					customer: customerData
				}
			})
		);
	}

	function handleFinish() {
		hideCheckout();
		clearCart();
		clearData();
	}

	let actions = (
		<>
			<Button type="button" textOnly onClick={handleClose}>
				Close
			</Button>
			<Button type="submit">Submit Order</Button>
		</>
	);

	if (isSending) {
		actions = <span>Sending order data...</span>;
	}

	if (data && !error) {
		return (
			<Modal open={progress === 'checkout'} onClose={handleFinish}>
				<h2>Success!</h2>
				<p>Your order was submitted successfully.</p>
				<p>We will get back to you with more details via email within the next few minute.</p>
				<p className="modal-actions">
					<Button onClick={handleFinish}>Okay</Button>
				</p>
			</Modal>
		);
	}

	return (
		<Modal open={progress === 'checkout'} onClose={progress === 'checkout' ? handleClose : null}>
			<form onSubmit={handleSubmit}>
				<h2>Checkout</h2>
				<p>Total Amout: {currencyFormatter.format(cartTotal)}</p>
				<Input label="Full Name" type="text" id="name" required />
				<Input label="E-Mail Address" type="email" id="email" required />
				<Input label="Street" type="text" id="street" required />
				<div className="control-row">
					<Input label="Postal Code" type="text" id="postal-code" required />
					<Input label="City" type="text" id="city" required />
				</div>
				{error && <Error title="Failed to submit order" message={error} />}
				<p className="modal-actions">{actions}</p>
			</form>
		</Modal>
	);
}
