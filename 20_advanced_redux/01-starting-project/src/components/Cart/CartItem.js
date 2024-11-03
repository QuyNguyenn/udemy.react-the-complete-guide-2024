import classes from './CartItem.module.css';

const CartItem = ({ item, onAddItem, onRemoveItem }) => {
  const { title, quantity, total, price } = item;

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={onRemoveItem}>-</button>
          <button onClick={onAddItem}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
