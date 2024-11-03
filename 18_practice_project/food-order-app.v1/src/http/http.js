const URL = 'http://localhost:3000';

const ENDPOINT = {
	meals: `${URL}/meals`,
	order: `${URL}/orders`
};

export async function fetchMeals() {
	const response = await fetch(ENDPOINT.meals, {
		method: 'GET'
	});

	if (response.ok) {
		return response.json();
	}

	await handleRequestFail(response);
}

export async function order(orderData) {
	const response = await fetch(ENDPOINT.order, {
		method: 'POST',
		headers: new Headers({
			'Content-Type': 'application/json'
		}),
		body: JSON.stringify(orderData)
	});

	if (response.ok) {
		return response.json();
	}

	await handleRequestFail(response);
}

async function handleRequestFail(response) {
	let resBody = await response.json();

	const error = new Error(resBody.message, {
		details: {
			statusCode: response.statusCode,
			...resBody
		}
	});

	error.details = {
		statusCode: response.status,
		...resBody
	};

	throw error;
}
