import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ProductItem from './ProductItem';
import classes from './Products.module.css';
import { cartActions } from '../redux/cartSlice';

const MOCK_PRODUCTS = [
  {
    id: '12020f5c-09a3-45a1-87f0-99be1adab091',
    name: 'RDX',
    description: 'Nulla tempus.',
    price: 64
  },
  {
    id: 'fa627193-a158-4e65-8dc5-974251330266',
    name: 'XT',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget.',
    price: 63
  },
  {
    id: '2336b8f7-b595-48fa-82d0-078ca6c51382',
    name: 'H3',
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget.',
    price: 13
  },
  {
    id: 'c76e580e-4897-4351-975f-daf8cd03d166',
    name: 'Bonneville',
    description:
      'Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.',
    price: 95
  },
  {
    id: '09e6a6cb-d098-4d5b-9ee6-03d37a409faf',
    name: 'Caravan',
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    price: 72
  }
];

const Products = () => {
  const dispatch = useDispatch();

  const addProductHandler = (product) => {
    dispatch(cartActions.addItem(product));
  };

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {MOCK_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            title={product.name}
            price={product.price}
            description={product.description}
            onAddItem={() => addProductHandler(product)}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
