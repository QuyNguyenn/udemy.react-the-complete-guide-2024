import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
	const [isDisplay, setIsDisplay] = useState(true);
	const dispatch = useDispatch();
	const countValue = useSelector((state) => state.count);

	const toggleCounterHandler = () => {
		setIsDisplay((prev) => !prev);
	};

	const incrementHandler = () => {
		dispatch({
			type: 'increment'
		});
	};

	const decrementHandler = () => {
		dispatch({
			type: 'decrement'
		});
	};

	const increaseHandler = (value) => {
		dispatch({
			type: 'increase',
			payload: value
		});
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{isDisplay && (
				<>
					<div className={classes.value}>{countValue}</div>
					<div>
						<button onClick={incrementHandler}>Increment</button>
						<button
							onClick={() => {
								increaseHandler(5);
							}}>
							Increase by 5
						</button>
						<button onClick={decrementHandler}>Decrement</button>
					</div>
				</>
			)}
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
