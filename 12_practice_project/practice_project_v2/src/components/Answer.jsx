import { useRef } from 'react';

export default function Answer({ answers, selectedAnswer, answerState, onSelectAnswer }) {
	const shuffledAnswers = useRef();

	if (!shuffledAnswers.current) {
		shuffledAnswers.current = [...answers].sort(() => Math.random() - 0.5);
	}

	return (
		<ul id="answers">
			{shuffledAnswers.current.map((answer) => {
				let isSelected = answer === selectedAnswer;
				let cssClass = '';

				if (isSelected) {
					if (answerState === 'answered') {
						cssClass = 'selected';
					} else {
						cssClass = answerState;
					}
				}

				return (
					<li className="answer" key={answer}>
						<button
							className={cssClass}
							disabled={answerState !== ''}
							onClick={() => onSelectAnswer(answer)}>
							{answer}
						</button>
					</li>
				);
			})}
		</ul>
	);
}
