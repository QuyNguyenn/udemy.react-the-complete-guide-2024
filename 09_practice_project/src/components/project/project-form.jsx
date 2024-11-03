import { useRef } from "react";
import { createPortal } from "react-dom";

import Input from "../common/user-input";
import Modal from "../common/modal";

export default function ProjectForm({ onSave, onCancel }) {
	const titleInputRef = useRef();
	const descriptionInputRef = useRef();
	const dueDateInputRef = useRef();
	const modalRef = useRef();


	const handleSaveProject = (e) => {
		const project = {
			title: titleInputRef.current.value,
			description: descriptionInputRef.current.value,
			dueDate: dueDateInputRef.current.value,
		}

		if (project.title.trim() && project.description.trim() && project.dueDate.trim()) {
			onSave(project);
		} else {
			modalRef.current.show()
		}
	}

	return (
		<>
			<div className="max-w-[35rem]">
				<menu className="flex items-center mb-4 gap-4 my-4">
					<button
						className="ml-auto py-2 rounded-md text-stone-800 hover:text-stone-950"
						onClick={onCancel}>
						Cancel
					</button>
					<button
						className="bg-stone-800 text-stone-50 px-6 py-2 rounded-md block hover:bg-stone-950"
						onClick={handleSaveProject}>
						Save
					</button>
				</menu>
				<Input ref={titleInputRef} label="Title" type="text" name='title' />
				<Input ref={descriptionInputRef} label="Description" type="textarea" name='description' />
				<Input ref={dueDateInputRef} label="Due Date" type="date" name='due-date' />
			</div>
			{createPortal(
				<Modal ref={modalRef} buttonCaption='Okay'>
					<h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
					<p className="text-stone-600 text-base mb-4">Oops... looks like uou forgot to enter a value.</p>
					<p className="text-stone-600 text-base mb-4">Please make sure you provide a valid value for every input field.</p>
				</Modal>
				, document.getElementById('modal-root'))}
		</>
	)
}