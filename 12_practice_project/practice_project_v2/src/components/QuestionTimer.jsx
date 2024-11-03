import { useState, useEffect } from 'react';

const RESOLUTION = 10;

export default function QuestionTimer({ timeout, onTimeout, mode }) {
	const [remainingTime, setRemainingTime] = useState(timeout);

	useEffect(() => {
		setRemainingTime(timeout);
		let isTimeout = false;

		const interval = setInterval(() => {
			setRemainingTime((prev) => {
				if (prev <= 0) {
					isTimeout = true;
				}
				return prev - RESOLUTION;
			});

			if (isTimeout) {
				clearInterval(interval);
				onTimeout();
			}
		}, RESOLUTION);

		return () => {
			clearInterval(interval);
		};
	}, [timeout, onTimeout]);

	return <progress id="question-time" className={mode} value={remainingTime} max={timeout} />;
}
