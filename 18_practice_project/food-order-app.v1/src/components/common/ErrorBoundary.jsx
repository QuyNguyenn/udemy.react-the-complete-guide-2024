import { Component } from 'react';
import Modal from './Modal';

export default class ErrorBoundary extends Component {
	constructor() {
		super();
		this.state = {
			error: undefined
		};
	}

	componentDidCatch(error) {
		if (error) {
			this.setState({ error });
		}
	}

	render() {
		return (
			<>
				{this.props.children}
				{this.state.error && (
					<Modal className="error" open={true}>
						<Modal.Title>
							<h2>Error</h2>
						</Modal.Title>
						<Modal.Body>
							<p>{this.state.error.message}</p>
						</Modal.Body>
						<Modal.Action>
							<form method="dialog">
								<button type="submit" className="text-button">
									Cancel
								</button>
							</form>
						</Modal.Action>
					</Modal>
				)}
			</>
		);
	}
}
