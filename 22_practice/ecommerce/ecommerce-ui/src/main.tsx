import React from "react";
import ReactDOM from "react-dom/client";
import WebFont from "webfontloader";
import App from "./App.tsx";
import "normalize.css/normalize.css";
import "./styles/style.scss";
import "react-phone-input-2/lib/style.css";

WebFont.load({
	google: {
		families: ["Tajawal"]
	}
});

ReactDOM.createRoot(document.getElementById("app")!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
