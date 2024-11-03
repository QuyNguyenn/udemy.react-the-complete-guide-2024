import noProjectImg from '../assets/no-projects.png';
import Button from './common/button';

export default function NoProject({ onClickCreate }) {
	return (
		<div className='w-full mt-24 text-center'>
			<img src={noProjectImg} alt='no-project-img' className='w-16 mx-auto' />
			<h2 className='text-xl font-bold text-stone-500 my-4'>
				No Project Selected
			</h2>
			<p
				className='text-stone-400 text-base mb-4'>
				Select a project or get start with a new one
			</p>
			<p className='mt-8'>
				<Button onClick={onClickCreate}>Create new project</Button>
			</p>
		</div>
	)
}