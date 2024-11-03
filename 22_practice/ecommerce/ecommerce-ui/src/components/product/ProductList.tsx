import DUMMY_PRODUCTS from "../../assets/data/products";
import ProductItem from "./ProductItem";

const ProductList = () => {
	const products = DUMMY_PRODUCTS;

	return (
		<section className="product-list-wrapper">
			<div className="product-grid">
				{products.map((product) => (
					<ProductItem key={product.id} product={product} />
				))}
			</div>
		</section>
	);
};

export default ProductList;
