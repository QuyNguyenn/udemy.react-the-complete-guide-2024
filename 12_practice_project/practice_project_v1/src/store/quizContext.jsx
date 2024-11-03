import { createContext, useReducer } from "react";
import questions from "../resource/questions";

export const ANSWER_STATUS = {
	SELECTED: 0,
	CORRECT: 1,
	WRONG: 2,
	NOT_ANSWERED: 3,
}

export const QUESTION_STATUS = {
	ANSWERING: 0,
	ANSWERED: 1,
	VERIFIED: 2
}

export const QuizContext = createContext({
	questions: [],
	answers: [],
	selectedQuestionId: 0,
	currentQuestionStatus: undefined,
	isFinish: false,
	randomRenderAnswer: [],
	getAnswer: () => { },
	quizStateDispatch: () => { }
})

const randomIndex = (length) => {
	const arr = [];
	const randomArr = [];

	for (let i = 0; i < length; i++) {
		arr.push(i);
	}

	for (let i = length - 1; i >= 0; i--) {
		let index = Math.round(Math.random() * i);
		randomArr.push(arr[index]);
		arr.splice(index, 1);
	}

	return randomArr;
}

const getAnswer = (state) => {
	const question = state.questions.find(q => q.id === state.selectedQuestionId);
	return state.randomRenderAnswer.map(i => question.answers[i]);
}

const quizReducer = (state, action) => {
	const reducer = {
		ANSWER: () => {
			let answer = action.answer;

			let index = state.answers.findIndex(answer => answer.questionId === state.selectedQuestionId);

			if (index != -1) {
				state.answers[index].answer = answer;
				state.answers[index].status = ANSWER_STATUS.SELECTED;

				return { ...state }
			} else {
				return {
					...state,
					answers: [{
						questionId: state.selectedQuestionId,
						answer: answer,
						status: ANSWER_STATUS.SELECTED
					}, ...state.answers],
					currentQuestionStatus: QUESTION_STATUS.ANSWERED
				}
			}

		},
		VERIFY_ANSWER: () => {
			const question = state.questions.find(question => question.id === state.selectedQuestionId);
			const answer = state.answers.find(answer => answer.questionId === state.selectedQuestionId);

			if (answer && question) {
				answer.status = question.answers[0] === answer.answer ? ANSWER_STATUS.CORRECT : ANSWER_STATUS.WRONG;
				return {
					...state,
					currentQuestionStatus: QUESTION_STATUS.VERIFIED
				}
			} else if (!answer && question) {
				return {
					...state,
					answers: [{
						questionId: state.selectedQuestionId,
						answer: null,
						status: ANSWER_STATUS.NOT_ANSWERED
					}, ...state.answers],
					currentQuestionStatus: QUESTION_STATUS.VERIFIED
				}
			}
		},
		NEXT_QUESTION: () => {
			const { answers, questions } = state;
			const answeredQuestion = answers.map(a => a.questionId);
			const nextQuestion = questions.find(q => !answeredQuestion.includes(q.id));

			if (nextQuestion) {
				return {
					...state,
					selectedQuestionId: nextQuestion.id,
					randomRenderAnswer: randomIndex(4),
					currentQuestionStatus: QUESTION_STATUS.ANSWERING
				}
			} else {
				return {
					...state,
					isFinish: true
				};
			}
		}
	}

	return reducer?.[action.type]();
}

export default function QuizContextProvider({ children }) {
	const [quizState, quizStateDispatch] = useReducer(quizReducer, {
		questions: JSON.parse(JSON.stringify(questions)),
		answers: [],
		selectedQuestionId: questions[0].id,
		isFinish: false,
		currentQuestionStatus: QUESTION_STATUS.ANSWERING,
		randomRenderAnswer: randomIndex(4)
	})

	const ctxValue = {
		...quizState,
		getAnswer: () => { return getAnswer(quizState) },
		quizStateDispatch
	}

	return (
		<QuizContext.Provider value={ctxValue}>
			{children}
		</QuizContext.Provider>
	)
}