import questions from '../resource/questions';
import summaryImg from '../assets/quiz-complete.png';

export default function Summary({ userAnswers }) {
	const numberOfQuestion = questions.length;
	const statistic = {
		skipped: 0,
		correct: 0,
		incorrect: 0
	};

	const result = questions.map((question, index) => {
		let answer = userAnswers[questions.length - index - 1];
		let className = '';

		if (answer === null) {
			statistic.skipped += 1;
			className = 'skipped';
		} else if (answer === question.answers[0]) {
			statistic.correct += 1;
			className = 'correct';
		} else {
			statistic.incorrect += 1;
			className = 'wrong';
		}

		return (
			<li key={question.id}>
				<h3>{index + 1}</h3>
				<p className="question">{question.text}</p>
				<p className={`user-answer ${className}`}>{answer != null ? answer : 'Skipped'}</p>
			</li>
		);
	});

	const statisticPercent = {
		skipped: Math.round((statistic.skipped / numberOfQuestion) * 100),
		correct: Math.round((statistic.correct / numberOfQuestion) * 100),
		incorrect: Math.round((statistic.incorrect / numberOfQuestion) * 100)
	};

	return (
		<div id="summary">
			<img src={summaryImg} />
			<h2 className="font-bold">QUIZ COMPLETED!</h2>
			<div id="summary-stats">
				<p>
					<span className="number">{statisticPercent.skipped}%</span>
					<span className="text">SKIPPED</span>
				</p>
				<p>
					<span className="number">{statisticPercent.correct}%</span>
					<span className="text">ANSWERED CORRECTLY</span>
				</p>
				<p>
					<span className="number">{statisticPercent.incorrect}%</span>
					<span className="text">ANSWERED INCORRECTLY</span>
				</p>
			</div>
			<ol>{result}</ol>
		</div>
	);
}
