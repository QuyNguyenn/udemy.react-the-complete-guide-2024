import { useContext, useCallback } from "react";

import appConfig from "../../config/appConfig";
import { QuizContext, QUESTION_STATUS } from "../../store/quizContext";
import Progress from "../common/progress-bar";

export default function Question() {
	const {
		questions,
		selectedQuestionId,
		currentQuestionStatus,
		quizStateDispatch } = useContext(QuizContext);

	const question = questions.find(q => q.id === selectedQuestionId);

	let timer = 0;
	if (currentQuestionStatus === QUESTION_STATUS.ANSWERING) {
		timer = appConfig.answerTime;
	} else if (currentQuestionStatus === QUESTION_STATUS.ANSWERED) {
		timer = appConfig.verifyTime;
	} else if (currentQuestionStatus === QUESTION_STATUS.VERIFIED) {
		timer = appConfig.switchQuestionTime;
	}

	let timerCallback = () => { };
	if (currentQuestionStatus === QUESTION_STATUS.ANSWERING
		|| currentQuestionStatus === QUESTION_STATUS.ANSWERED) {
		timerCallback = useCallback(() => {
			quizStateDispatch({
				type: "VERIFY_ANSWER"
			})
		}, [currentQuestionStatus])
	} else if (currentQuestionStatus === QUESTION_STATUS.VERIFIED) {
		timerCallback = useCallback(() => {
			quizStateDispatch({
				type: 'NEXT_QUESTION'
			})
		}, [currentQuestionStatus])
	}

	return (
		<div id="question">
			<Progress timer={timer} callback={timerCallback} />
			<h2>{question.text}</h2>
		</div>
	)
}