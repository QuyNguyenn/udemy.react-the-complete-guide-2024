import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/RootLayout";
import HomePage from "./pages/Home";
import ShopPage from "./pages/Shop";
import FeaturePage from "./pages/Feature";
import RecommendedPage from "./pages/Recommended";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: (
			<Root>
				<ErrorPage />
			</Root>
		),
		children: [
			{
				children: [
					{ index: true, element: <HomePage /> },
					{ path: "shop", element: <ShopPage /> },
					{ path: "feature", element: <FeaturePage /> },
					{ path: "recommended", element: <RecommendedPage /> }
				]
			}
		]
	}
]);

export default router;
