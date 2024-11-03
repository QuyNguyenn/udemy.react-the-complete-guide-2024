import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { PropsWithChildren } from "react";

const Root: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Header />
			<main className="content">{children || <Outlet />}</main>
			<Footer />
		</>
	);
};

export default Root;
