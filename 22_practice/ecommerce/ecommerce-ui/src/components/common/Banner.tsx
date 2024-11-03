import { PropsWithChildren } from "react";

const Banner: React.FC<PropsWithChildren<{ image: string }>> = ({ image, children }) => {
	return (
		<div className="banner">
			<div className="banner-desc">{children}</div>
			<div className="banner-img">
				<img src={image} alt="Banner Image" />
			</div>
		</div>
	);
};

export default Banner;
