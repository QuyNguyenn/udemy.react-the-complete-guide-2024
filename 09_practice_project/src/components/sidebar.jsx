import Button from "./common/button";

export default function Sidebar({ onClickCreate, projects, selectedProjectId, onSelectProject, ...props }) {

	let buttonClass = "py-1 px-2 w-full text-left rounded-sm my-1";
	let buttonInactiveClass = "hover:bg-stone-800 hover:text-stone-200 text-stone-400";
	let buttonActiveClass = "bg-stone-800 text-stone-200";

	return (
		<aside className="h-full rounded-r-xl bg-stone-900 text-stone-50 px-8 py-16 w-1/3 md:w-72">
			<h2 className="md:text-xl font-bold mb-8 uppercase text-stone-200">YOUR PROJECTS</h2>
			<Button onClick={onClickCreate}>
				+ Add Project
			</Button>
			<ul className="mt-8 flex flex-col">
				{projects.map(({ id, title }) =>
					<li key={id}>
						<button
							className={`${buttonClass} ${id == selectedProjectId ? buttonActiveClass : buttonInactiveClass}`}
							onClick={() => { onSelectProject(id) }}>
							{title}
						</button>
					</li>
				)}
			</ul>
		</aside>
	)
}