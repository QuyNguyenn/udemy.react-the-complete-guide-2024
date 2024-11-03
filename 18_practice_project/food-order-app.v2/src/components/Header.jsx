import { useContext } from 'react';
import logoImg from '../assets/logo.jpg';
import Button from './common/Button';
import CartContext from '../context/CartContext';
import UserProgressContext from '../context/UserProgressContext';

export default function Header() {
	const { items } = useContext(CartContext);
	const { showCart } = useContext(UserProgressContext);

	const totalCartItems = items.reduce((prev, item) => prev + item.quantity, 0);

	function handleShowCart() {
		showCart();
	}

	return (
		<header id="main-header">
			<div id="title">
				<img src={logoImg} alt="Logo Image" />
				<h2>ReactFood</h2>
			</div>
			<nav>
				<Button onClick={handleShowCart} textOnly>
					Cart ({totalCartItems})
				</Button>
			</nav>
		</header>
	);
}
