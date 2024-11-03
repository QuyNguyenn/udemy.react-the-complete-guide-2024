import { useState, useCallback } from 'react';
import questions from '../resource/questions';
import Question from './Question';
import Summary from './Summary';

export default function Quiz() {
	const [userAnswers, setUserAnswers] = useState([]);

	const activeQuestionIndex = userAnswers.length;
	const quizIsCompleted = activeQuestionIndex >= questions.length;

	const handleSelectAnswer = useCallback((answer) => {
		setUserAnswers((prevUserAnswers) => [answer, ...prevUserAnswers]);
	}, []);

	if (quizIsCompleted) {
		return <Summary userAnswers={userAnswers} />;
	}

	return (
		<div id="quiz">
			<Question
				key={activeQuestionIndex}
				question={questions[activeQuestionIndex]}
				onSelectAnswer={handleSelectAnswer}
			/>
		</div>
	);
}
