import { useContext } from "react";
import { QuizContext } from "../../store/quizContext";
import { QUESTION_STATUS } from "../../store/quizContext";
import Button from "../common/button";

export default function Answer() {
	const { questions, answers, selectedQuestionId, currentQuestionStatus, getAnswer, quizStateDispatch } = useContext(QuizContext);
	const question = questions.find(q => q.id === selectedQuestionId);

	let selectedAnswer = answers.find(a => a.questionId === selectedQuestionId);

	const handleClickAnswer = (answer) => {
		if (currentQuestionStatus === QUESTION_STATUS.ANSWERING) {
			quizStateDispatch({ type: 'ANSWER', answer });
		}
	}

	return (
		<div id="answers">
			{getAnswer().map((answer, index) => {
				let buttonClass = '';
				if ((currentQuestionStatus === QUESTION_STATUS.ANSWERED
					|| currentQuestionStatus === QUESTION_STATUS.VERIFIED)
					&& selectedAnswer.answer === answer) {
					buttonClass = 'selected';
				}

				if (currentQuestionStatus === QUESTION_STATUS.VERIFIED &&
					answer === question.answers[0]) {
					buttonClass = 'correct';
				}

				return (
					<div key={index} className="answer">
						<Button
							className={buttonClass}
							onClick={() => handleClickAnswer(answer)}
							buttonText={answer} />
					</div>
				)
			})}
		</div>
	)
}