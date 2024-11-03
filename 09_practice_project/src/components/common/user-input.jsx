import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, type, ...props }, ref) {
	const inputClass = "bg-stone-200 block w-full rounded-sm text-sm text-stone-600 font-normal p-1 border-b-2 border-stone-300 focus:outline-none focus:border-stone-600";

	return (
		<div className="w-full my-4">
			<label className="text-sm font-bold text-stone-500 block my-1 uppercase">{label}</label>
			{type === "textarea"
				? <textarea ref={ref} className={inputClass} {...props}></textarea>
				: <input ref={ref} className={inputClass} type={type} {...props}></input>}
		</div>
	)
})

export default Input;