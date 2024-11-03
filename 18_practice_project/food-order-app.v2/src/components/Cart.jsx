import { useContext } from 'react';
import Modal from './common/Modal';
import CartContext from '../context/CartContext';
import { currencyFormatter } from '../util/formatting';
import Button from './common/Button';
import UserProgressContext from '../context/UserProgressContext';
import CartItem from './CartItem';

export default function Cart() {
	const { items, addItem, removeItem } = useContext(CartContext);
	const { progress, hideCart, showCheckout } = useContext(UserProgressContext);

	const cartTotal = items.reduce((prev, item) => prev + item.price * item.quantity, 0);

	function handleCloseCart() {
		hideCart();
	}

	function handleGoToCheckout() {
		showCheckout();
	}

	return (
		<Modal
			className="cart"
			open={progress === 'cart'}
			onClose={progress === 'cart' ? handleCloseCart : null}>
			<h2>Your Cart</h2>
			<ul>
				{items.map((item) => (
					<CartItem
						key={item.id}
						name={item.name}
						quantity={item.quantity}
						price={item.price}
						onIncrease={() => addItem(item)}
						onDecrease={() => removeItem(item.id)}
					/>
				))}
			</ul>
			<p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
			<p className="modal-actions">
				<Button onClick={handleCloseCart} textOnly>
					Cancel
				</Button>
				{items.length > 0 && <Button onClick={handleGoToCheckout}>Go to Checkout</Button>}
			</p>
		</Modal>
	);
}
