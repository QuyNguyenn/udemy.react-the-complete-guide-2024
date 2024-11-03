import { useState } from "react";

export default function InvestmentInput({ label, name, value, onValueChange }) {
	const [inputValue, setInputValue] = useState(value);

	const handleUpdateInputValue = e => {
		const updateValue = e.target.value;
		setInputValue(updateValue);
		onValueChange(name, updateValue);
	}

	return (
		<div>
			<label>{label}</label>
			<input type='number' name={name} value={inputValue} onChange={handleUpdateInputValue} required />
		</div>
	)
}