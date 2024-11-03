import { useContext } from "react";
import { QuizContext } from "../../store/quizContext";
import Question from "./question";
import Answer from "./answer";
import QuizResult from "./result";

export default function Quiz() {
	const { isFinish } = useContext(QuizContext);

	return (
		<>
			{!isFinish
				? <div id="quiz">
					<Question />
					<Answer />
				</div>
				: <QuizResult />}
		</>
	)
}