import { SearchOutlined } from "@ant-design/icons";

const SearchBar = () => {
	return (
		<div className="searchbar">
			<SearchOutlined className="searchbar-icon" />
			<input className="search-input searchbar-input" type="text" placeholder="Search product..." />
		</div>
	);
};

export default SearchBar;
