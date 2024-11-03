import { useState, useEffect, useRef } from "react";

export default function Progress({ timer, callback }) {
	let timerInMiliSecond = timer * 1000;
	const [remain, setRemain] = useState(timerInMiliSecond);
	const progressRef = useRef();

	useEffect(() => {
		setRemain(timerInMiliSecond);

		const interval = setInterval(() => {
			if (progressRef.current.value > 0) {
				setRemain(prevRemain => prevRemain - 10)
			} else {
				clearInterval(interval);
				if (callback) {
					callback();
				}
			}
		}, 10)

		return () => {
			clearInterval(interval);
		}
	}, [timer, callback])

	return (
		<progress ref={progressRef} value={remain} max={timerInMiliSecond} />
	)
}