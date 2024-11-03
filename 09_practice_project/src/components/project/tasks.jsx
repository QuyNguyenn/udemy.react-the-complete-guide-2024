import { useState } from "react";

export default function Tasks({ tasks, onAddTask, onRemoveTask }) {
	const [taskName, setTaskName] = useState('');

	const handleTaskChange = (e) => {
		setTaskName(e.target.value);
	}

	const handleAddTask = () => {
		if (taskName) {
			onAddTask(taskName);
			setTaskName('')
		}
	}

	return (
		<div className="pt-4">
			<h2 className="text-3xl font-bold text-stone-800 mb-4">Tasks</h2>
			<div onSubmit={handleAddTask}>
				<div className="flex">
					<input
						className="bg-stone-200 block rounded-sm text-lg text-stone-900 font-semibold py-1 px-2 w-72 mr-5"
						value={taskName}
						onChange={handleTaskChange} />
					<button
						onClick={handleAddTask}
						className="text-lg font-semibold text-stone-800 hover:text-stone-500">
						Add Task
					</button>
				</div>
			</div>
			{!!tasks?.length
				&& <ul className="bg-stone-100 py-8 px-4 rounded-md mt-9 flex flex-col space-y-4">
					{tasks.map(({ name, id }) => (
						<li className="flex" key={id}>
							<span className="text-lg base text-stone-900 font-semibold">
								{name}
							</span>
							<button className="ml-auto text-lg text-stone-700 font-semibold hover:text-stone-500"
								onClick={() => onRemoveTask(id)}>
								Clear
							</button>
						</li>
					))}
				</ul>}
		</div>
	)
}