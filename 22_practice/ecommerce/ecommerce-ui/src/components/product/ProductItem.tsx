import { ProductType } from "../../models/product";
import { currencyFormatter } from "../../util/formatter";

const ProductItem: React.FC<{ product: ProductType }> = ({ product }) => {
	return (
		<div className="product-card" style={{ boxShadow: "none" }}>
			<div className="product-card-content">
				<div className="product-card-img-wrapper">
					<img src={product.image} alt={product.name} className="product-card-img is-img-loaded" />
				</div>
				<div className="product-details">
					<h5 className="product-card-name text-overflow-ellipsis margin-auto">{product.name}</h5>
					<p className="product-card-brand">{product.brand}</p>
					<h4 className="product-card-price">{currencyFormatter.format(product.price)}</h4>
				</div>
			</div>
			<button className="product-card-button button-small button button-block ">
				Add to basket
			</button>
		</div>
	);
};

export default ProductItem;
