import Header from "./components/header";
import QuizContextProvider from "./store/quizContext";
import Quiz from "./components/quiz/quiz";

function App() {
	return (
		<>
			<Header />
			<main>
				<QuizContextProvider>
					<Quiz />
				</QuizContextProvider>
			</main>
		</>
	)
}

export default App;