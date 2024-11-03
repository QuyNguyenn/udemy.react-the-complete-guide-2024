import { useState, useCallback } from 'react';
import QuestionTimer from './QuestionTimer';
import Answer from './Answer';

const ANSWER_TIMEOUT = 3000;
const VERIFY_DELAY = 1000;
const SKIP_DELAY = 1000;

export default function Question({ question, onSelectAnswer }) {
	const [answer, setAnswer] = useState({
		selectedAnswer: '',
		isCorrect: null
	});
	let answerTimer = 0;
	let answerState = '';

	if (answer.selectedAnswer === '') {
		answerTimer = ANSWER_TIMEOUT;
	} else if (answer.isCorrect === null) {
		answerTimer = VERIFY_DELAY;
		answerState = 'answered';
	} else {
		answerState = answer.isCorrect ? 'correct' : 'wrong';
		answerTimer = SKIP_DELAY;
	}

	const handleSelectAnswer = (answer) => {
		setAnswer((prevAnswer) => ({
			...prevAnswer,
			selectedAnswer: answer
		}));
	};

	const handleQuestionTimeout = useCallback(() => {
		if (answer.selectedAnswer === '') {
			onSelectAnswer(null);
		} else if (answer.isCorrect === null) {
			setAnswer((prevAnswer) => ({
				...prevAnswer,
				isCorrect: answer.selectedAnswer === question.answers[0]
			}));
		} else {
			onSelectAnswer(answer.selectedAnswer);
		}
	}, [onSelectAnswer, answer]);

	return (
		<div id="question">
			<QuestionTimer timeout={answerTimer} mode={answerState} onTimeout={handleQuestionTimeout} />
			<h2>{question.text}</h2>
			<Answer
				answers={question.answers}
				selectedAnswer={answer.selectedAnswer}
				answerState={answerState}
				onSelectAnswer={handleSelectAnswer}
			/>
		</div>
	);
}
