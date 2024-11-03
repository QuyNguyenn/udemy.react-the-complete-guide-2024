import { useRef, forwardRef, useImperativeHandle } from "react";

import Button from "./button";

const Modal = forwardRef(function Modal({ buttonCaption, children, ...props }, ref) {
	const dialogRef = useRef();

	useImperativeHandle(ref, () => {
		return {
			show() {
				dialogRef.current.showModal();
			}
		}
	}, []);

	return (
		<dialog className="p-4 rounded-md backdrop:bg-stone-900/90 shadow-md" ref={dialogRef}>
			{children}
			<form method="dialog" className="mt-4 text-right">
				<Button>{buttonCaption}</Button>
			</form>
		</dialog>
	)
});

export default Modal;