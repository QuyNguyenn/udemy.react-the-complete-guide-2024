import { useRef, useEffect } from "react"

export default function Button({ buttonText, ...props }) {
	const ref = useRef();

	useEffect(() => {
		ref.current.blur();
	})

	return <button ref={ref} {...props}>{buttonText}</button>
}