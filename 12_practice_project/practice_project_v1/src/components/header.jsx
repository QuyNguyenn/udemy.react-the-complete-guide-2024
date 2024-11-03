import logoImage from '../assets/quiz-logo.png';

export default function Header() {
	return (
		<header className='flex flex-col'>
			<img className='mx-auto' src={logoImage} alt="react-quiz-logo" />
			<h1 className='uppercase'>REACTQUIZ</h1>
		</header>
	)
}