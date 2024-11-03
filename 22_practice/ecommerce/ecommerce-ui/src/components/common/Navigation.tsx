import { NavLink, Link, useLocation } from "react-router-dom";
import { ShoppingOutlined, FilterOutlined } from "@ant-design/icons";
import logoImg from "../../assets/images/logo-full.png";
import SearchBar from "./SearchBar";
import FilterModal from "../FilterModal";

const MainNavigation = () => {
	const location = useLocation();

	const activeNavLinkClass = ({ isActive }: { isActive: boolean }) => {
		return isActive ? "navigation-menu-active" : undefined;
	};

	return (
		<>
			<nav className="navigation">
				<div className="logo">
					<Link to="/">
						<img src={logoImg} alt="Logo Image" />
					</Link>
				</div>
				<ul className="navigation-menu-main">
					<li className="navigation-menu-item">
						<NavLink to="/" className={activeNavLinkClass}>
							Home
						</NavLink>
					</li>
					<li className="navigation-menu-item">
						<NavLink to="/shop" className={activeNavLinkClass}>
							Shop
						</NavLink>
					</li>
					<li className="navigation-menu-item">
						<NavLink to="/feature" className={activeNavLinkClass}>
							Featured
						</NavLink>
					</li>
					<li className="navigation-menu-item">
						<NavLink to="/recommended" className={activeNavLinkClass}>
							Recommended
						</NavLink>
					</li>
				</ul>
				{location.pathname.startsWith("/shop") && (
					<div className="button-muted button-small">
						Filters &nbsp;
						<FilterOutlined />
					</div>
				)}
				<SearchBar />
				<ul className="navigation-menu">
					<li className="navigation-menu-item">
						<button type="button" className="navigation-menu-link button-link basket-toggle">
							<div className="badge">
								<ShoppingOutlined style={{ fontSize: "2.4rem" }} />
							</div>
						</button>
					</li>
					<li className="navigation-action">
						<button className="button button-small">Sign Up</button>
						<button className="button button-small button-muted margin-left-s">Sign In</button>
					</li>
				</ul>
			</nav>
			<FilterModal />
		</>
	);
};

export default MainNavigation;
