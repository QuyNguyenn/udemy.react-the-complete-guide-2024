export default function Button({ children, ...props }) {
	return (
		<button
			className="text-stone-400 px-4 py-2 text-xs md:text-base bg-stone-800 rounded-md hover:bg-stone-700 hover:text-stone-100"
			{...props}>
			{children}
		</button>
	)
}