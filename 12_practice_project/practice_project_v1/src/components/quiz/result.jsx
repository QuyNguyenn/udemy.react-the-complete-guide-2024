import quizCompleteImg from "../../assets/quiz-complete.png";
import { useContext } from "react";
import { QuizContext } from "../../store/quizContext";

export default function QuizResult() {
	const { questions, answers } = useContext(QuizContext);

	const numberOfQuestion = questions.length;
	const statistic = {
		skipped: 0,
		correct: 0,
		incorrect: 0
	}

	const result = questions.map((q, index) => {
		let { answer } = answers.find(a => a.questionId === q.id);
		let className = '';

		if (!answer) {
			statistic.skipped += 1;
			answer = q.answers[0];
			className = 'skipped';
		} else if (answer === q.answers[0]) {
			statistic.correct += 1;
			className = 'correct';
		} else {
			statistic.incorrect += 1;
			className = 'wrong';
		}

		return <li key={q.id}>
			<h3>{index + 1}</h3>
			<p className="question">{q.text}</p>
			<p className={`user-answer ${className}`}>{answer}</p>
		</li>
	})

	const fornatedStatistic = {
		skipped: Math.round(statistic.skipped / numberOfQuestion * 100),
		correct: Math.round(statistic.correct / numberOfQuestion * 100),
		incorrect: Math.round(statistic.incorrect / numberOfQuestion * 100),
	}

	return (
		<div id="summary">
			<img src={quizCompleteImg} />
			<h2 className="font-bold">QUIZ COMPLETED!</h2>
			<div id="summary-stats">
				<p>
					<span className="number">{fornatedStatistic.skipped}%</span>
					<span className="text">SKIPPED</span>
				</p>
				<p>
					<span className="number">{fornatedStatistic.correct}%</span>
					<span className="text">
						ANSWERED
						CORRECTLY
					</span>
				</p>
				<p>
					<span className="number">{fornatedStatistic.incorrect}%</span>
					<span className="text">
						ANSWERED
						INCORRECTLY
					</span>
				</p>
			</div>
			<ol>
				{result}
			</ol>
		</div>
	)
}