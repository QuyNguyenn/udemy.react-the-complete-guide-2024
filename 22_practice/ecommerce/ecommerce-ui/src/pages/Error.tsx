import { ErrorResponse, isRouteErrorResponse, useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
	const error = useRouteError();
	const navigate = useNavigate();
	let errorInfo;

	if (isRouteErrorResponse(error)) {
		const routerErrorResponse = error as ErrorResponse;

		if (routerErrorResponse.statusText.startsWith("4")) {
			errorInfo = {
				title: ":( Page you are looking for doesn&apos;t exists.",
				buttonText: "Go back",
				handler: () => {
					navigate(-1);
				}
			};
		} else if (routerErrorResponse.statusText === "503") {
			errorInfo = {
				title: ":( No Internet Connection.",
				description: "Please check you network connectivity and try again.",
				buttonText: "Try again",
				handler: () => {
					window.location.reload();
				}
			};
		} else {
			errorInfo = {
				title: ":( An error has occured. Please try again.",
				buttonText: "Try Again",
				handler: () => {
					navigate("/");
				}
			};
		}
	} else {
		errorInfo = {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			title: (error as any)?.message || "Somethings when wrong.",
			buttonText: "Try Again",
			handler: () => {
				navigate("/");
			}
		};
	}

	console.log(error);

	return (
		<div className="page-not-found">
			<h1>{errorInfo.title}</h1>
			{errorInfo.description && <p>{errorInfo.description}</p>}
			<br />
			<button className="button" onClick={errorInfo.handler}>
				{errorInfo.buttonText}
			</button>
		</div>
	);
};

export default ErrorPage;
