import { Children, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ className, children, open, ...props }) {
	const ref = useRef();
	let title, body, action;

	useEffect(() => {
		if (open) {
			ref.current.showModal();
		} else {
			ref.current.close();
		}
	}, [open]);

	Children.forEach(children, (child) => {
		if (child.type === ModalTitle) {
			return (title = child);
		}

		if (child.type === ModalBody) {
			return (body = child);
		}

		if (child.type === ModalAction) {
			return (action = child);
		}
	});

	const modalElement = document.getElementById('modal');

	return (
		<>
			{createPortal(
				<dialog ref={ref} className={`modal ${className}`} {...props}>
					{title}
					{body}
					{action}
				</dialog>,
				modalElement
			)}
		</>
	);
}

Modal.Title = ModalTitle;
Modal.Body = ModalBody;
Modal.Action = ModalAction;

function ModalTitle({ children }) {
	return children;
}

function ModalBody({ children }) {
	return children;
}

function ModalAction({ className, children, ...props }) {
	return (
		<div className={`modal-actions ${className}`} {...props}>
			{children}
		</div>
	);
}
