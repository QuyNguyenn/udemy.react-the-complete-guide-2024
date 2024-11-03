import { useState } from 'react';

export default function Input({ label, id, initValue, className = '', ...props }) {
	const [useInput, setUserInput] = useState({
		value: initValue || '',
		invalidMessage: ''
	});
	let inputClass = useInput.invalidMessage ? 'invalid' : '';

	const handleChangeValue = (event) => {
		setUserInput({
			value: event.target.value,
			invalidMessage: ''
		});
	};

	const handleBlur = (event) => {
		validateInput(event.target);
	};

	const handleInvalid = (event) => {
		event.preventDefault();
		validateInput(event.target);
	};

	const validateInput = (input) => {
		if (!input.validity.valid) {
			setUserInput((prev) => ({
				...prev,
				invalidMessage: input.validationMessage
			}));
		}
	};

	return (
		<div className="control">
			<label htmlFor={id}>{label}</label>
			<input
				id={id}
				value={useInput.value}
				onChange={handleChangeValue}
				onBlur={handleBlur}
				onInvalid={handleInvalid}
				{...props}
				className={`${inputClass} ${className}`}
			/>
			{useInput.invalidMessage && <span className="invalid">{useInput.invalidMessage}</span>}
		</div>
	);
}
