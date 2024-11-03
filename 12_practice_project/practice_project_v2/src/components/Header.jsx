import QuizLogo from '../assets/quiz-logo.png';

export default function Header() {
	return (
		<header className="flex flex-col">
			<img className="mx-auto" src={QuizLogo} alt="QuizLogo" />
			<h1>REACTQUIZ</h1>
		</header>
	);
}
