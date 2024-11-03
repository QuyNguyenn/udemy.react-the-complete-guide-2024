import { useSelector, useDispatch } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { cartActions } from '../redux/cartSlice';

const Cart = () => {
  const cardItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const addProductHandler = (product) => {
    dispatch(cartActions.addItem(product));
  };

  const removeProductHandler = (id) => {
    dispatch(cartActions.removeItem(id));
  };

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {cardItems.length > 0 && (
        <ul>
          {cardItems.map((item) => (
            <CartItem
              key={item.id}
              item={{
                title: item.name,
                quantity: item.quantity,
                total: item.quantity * item.price,
                price: item.price
              }}
              onAddItem={() => addProductHandler(item)}
              onRemoveItem={() => {
                removeProductHandler(item.id);
              }}
            />
          ))}
        </ul>
      )}
    </Card>
  );
};

export default Cart;
