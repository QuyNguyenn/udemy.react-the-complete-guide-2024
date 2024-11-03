import { Link } from "react-router-dom";
import logoImg from "../../assets/images/logo-full.png";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-col-1">
				<span>
					Developed by <Link to="/">QUY NGUYEN</Link>
				</span>
			</div>
			<div className="footer-col-2">
				<div className="footer-logo">
					<img src={logoImg} alt="Logo Image" />
				</div>
			</div>
			<div className="footer-col-3"></div>
		</footer>
	);
};

export default Footer;
