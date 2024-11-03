import { Link } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";
import bannerImg from "../assets/images/banner-girl.png";
import Banner from "../components/common/Banner";
import ProductGrid from "../components/product/ProductGrid";
import DUMMY_PRODUCTS from "../assets/data/products";

const SHOP = "/shop";
const MAX_PRODUCTS = 6;

const HomePage = () => {
	const featuredProducts = [...DUMMY_PRODUCTS]
		.sort((a, b) => a.price - b.price)
		.slice(0, MAX_PRODUCTS);
	const recommendedProducts = [...DUMMY_PRODUCTS]
		.sort((a, b) => b.price - a.price)
		.slice(0, MAX_PRODUCTS);

	return (
		<div className="home">
			<Banner image={bannerImg}>
				<h1 className="text-thin">
					<strong>See</strong> everything <br /> with <strong>Clarity</strong>
				</h1>
				<p>
					Buying eyewear should leave you happy and good-looking, with money in your pocket.
					Glasses, sunglasses, and contacts—we’ve got your eyes covered.
				</p>
				<br />
				<Link to={SHOP} className="button">
					Shop Now &nbsp;
					<ArrowRightOutlined />
				</Link>
			</Banner>
			<div className="display">
				<div className="display-header">
					<h1>Featured Products</h1>
					<Link to="/feature">See All</Link>
				</div>
				<ProductGrid products={featuredProducts} />
			</div>
			<div className="display">
				<div className="display-header">
					<h1>Recommended Products</h1>
					<Link to="/recommended">See All</Link>
				</div>
				<ProductGrid products={recommendedProducts} />
			</div>
		</div>
	);
};

export default HomePage;
