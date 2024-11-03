import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../redux/cartSlice';
import classes from './CartButton.module.css';

const CartButton = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalItemsQuantity = cartItems.reduce(
    (acc, item) => (acc += item.quantity),
    0
  );

  const toggleCartHandler = () => {
    dispatch(cartActions.toggle());
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItemsQuantity}</span>
    </button>
  );
};

export default CartButton;
