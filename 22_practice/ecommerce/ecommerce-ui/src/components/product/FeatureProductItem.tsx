import React from "react";
import { ProductType } from "../../models/product";

const FeatureProductItem: React.FC<{ product: ProductType }> = ({ product }) => {
	return (
		<div>
			<article className="product-display">
				<div className="product-display-img">
					<img src={product.image} alt="Product Image" className="product-card-img" />
				</div>
				<div className="product-display-details">
					<h2>{product.name}</h2>
					<p className="text-subtle text-italic">{product.brand}</p>
				</div>
			</article>
		</div>
	);
};

export default FeatureProductItem;
