import Banner from "../components/common/Banner";
import bannerImg from "../assets/images/banner-guy.png";
import ProductGrid from "../components/product/ProductGrid";
import DUMMY_PRODUCTS from "../assets/data/products";

const FeaturePage = () => {
	const featuredProducts = [...DUMMY_PRODUCTS].sort((a, b) => a.price - b.price).slice(0, 8);

	return (
		<div className="featured">
			<Banner image={bannerImg}>
				<h1 className="text-thin">
					<strong>Featured Products</strong>
				</h1>
			</Banner>
			<div className="display">
				<ProductGrid products={featuredProducts} />
			</div>
		</div>
	);
};

export default FeaturePage;
