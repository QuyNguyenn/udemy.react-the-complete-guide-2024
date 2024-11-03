import AppContextProvider from './context/AppContext';
import Header from './components/Header';
import Menu from './components/Menu';
import ErrorBoundary from './components/common/ErrorBoundary';

function App() {
	return (
		<AppContextProvider>
			<ErrorBoundary>
				<Header />
				<Menu />
			</ErrorBoundary>
		</AppContextProvider>
	);
}

export default App;
