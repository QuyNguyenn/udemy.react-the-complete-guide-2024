import Banner from "../components/common/Banner";
import bannerImg from "../assets/images/banner-girl-1.png";
import ProductGrid from "../components/product/ProductGrid";
import DUMMY_PRODUCTS from "../assets/data/products";

const RecommendedPage = () => {
	const recommendedProducts = [...DUMMY_PRODUCTS].sort((a, b) => b.price - a.price).slice(0, 6);

	return (
		<div className="featured">
			<Banner image={bannerImg}>
				<h1 className="text-thin">
					<strong>Recommended Products</strong>
				</h1>
			</Banner>
			<div className="display">
				<ProductGrid products={recommendedProducts} />
			</div>
		</div>
	);
};

export default RecommendedPage;
