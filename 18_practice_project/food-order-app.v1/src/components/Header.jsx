import { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import logoImg from '../assets/logo.jpg';
import CartModal from './CartModal';
import CheckoutModal from './CheckoutModal';

export default function Header() {
	const { cart } = useContext(AppContext);
	const [modal, setModal] = useState();

	const itemQuantity = cart.reduce((prev, item) => {
		return prev + item.quantity;
	}, 0);

	return (
		<>
			<header id="main-header">
				<div id="title">
					<img src={logoImg} alt="Logo Image" />
					<h1 className="uppercase">REACTFOOD</h1>
				</div>
				<button className="text-button" onClick={() => setModal('cart')}>
					Cart {itemQuantity > 0 ? `(${itemQuantity})` : ''}
				</button>
			</header>
			{modal === 'cart' && (
				<CartModal
					className="cart"
					onCancel={() => setModal('')}
					onCheckout={() => setModal('checkout')}
					open
				/>
			)}
			{modal === 'checkout' && (
				<CheckoutModal className="cart" onCancel={() => setModal('')} open />
			)}
		</>
	);
}
