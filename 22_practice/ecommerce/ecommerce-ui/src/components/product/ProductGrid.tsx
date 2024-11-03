import { ProductType } from "../../models/product";
import FeatureProductItem from "./FeatureProductItem";

const ProductGrid: React.FC<{ products: ProductType[] }> = ({ products }) => {
	return (
		<div className="product-display-grid">
			{products.map((product) => (
				<FeatureProductItem key={product.id} product={product} />
			))}
		</div>
	);
};

export default ProductGrid;
