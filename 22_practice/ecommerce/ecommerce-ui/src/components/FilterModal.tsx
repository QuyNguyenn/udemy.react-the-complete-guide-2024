import Modal from "react-modal";
import { ProductType } from "../models/product";
import DUMMY_PRODUCTS from "../assets/data/products";

Modal.setAppElement("#modal");

function getAllBrands(products: ProductType[]): string[] {
	return products.map((product) => product.brand);
}

const sortTypes: { value: string; text: string }[] = [
	{ value: "", text: "None" },
	{ value: "name-asc", text: "Name Ascending A-Z" },
	{ value: "name-desc", text: "Name Descending A-Z" },
	{ value: "price-asc", text: "Price Low - High" },
	{ value: "price-desc", text: "Price High - Low" }
];

const FilterModal = () => {
	return (
		<Modal isOpen={true}>
			<div className="filter-toggle-sub">
				<div className="filters-field">
					<span>Brand</span>
					<select className="filters-brand">
						{[
							<option value="all" selected>
								All Brands
							</option>,
							...getAllBrands(DUMMY_PRODUCTS).map((brand) => <option value={brand}>{brand}</option>)
						]}
					</select>
				</div>
				<div className="filters-field">
					<span>Sort By</span>
					<select className="filters-sort-by d-block">
						{sortTypes.map((type) => (
							<option value={type.value}>{type.text}</option>
						))}
					</select>
				</div>
			</div>
		</Modal>
	);
};

export default FilterModal;
