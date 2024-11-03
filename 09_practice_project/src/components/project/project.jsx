import Tasks from "./tasks";

export default function Project({ project, onRemoveProject, tasks, ...props }) {
	const dateFormat = {
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	}
	const { title, description, dueDate } = project;
	const formatedDate = new Date(dueDate).toLocaleDateString('en-US', dateFormat);

	return (
		<div className="max-w-[35rem] mt-16">
			<header className="pb-4 -mb-4 border-b-2 border-stone-300">
				<div className="flex">
					<h2
						className="text-3xl font-bold text-stone-600 mb-2">
						{title}
					</h2>
					<button
						className="text-stone-600 ml-auto hover:text-stone-950"
						onClick={() => onRemoveProject(project.id)}>
						Delete
					</button>
				</div>
				<p className="text-stone-400 mb-4">{formatedDate}</p>
				<p className="text-stone-600 whitespace-pre-wrap">{description}</p>
			</header>
			<Tasks tasks={tasks} {...props} />
		</div>
	)
}