import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onUpdatePlayerName }) {
	const [playerName, setPlayerName] = useState(initialName)
	const [isEditting, setIsEditing] = useState(false);

	const buttonLabel = {
		default: 'Edit',
		editing: 'Save'
	}

	const handleEditBtnClick = () => {
		setIsEditing(editting => !editting);

		if (isEditting) {
			onUpdatePlayerName(symbol, playerName);
		}
	};

	const handlePlayerNameChange = e => {
		setPlayerName(e.target.value);
	}

	return (
		<li className={isActive ? 'active' : undefined}>
			<span className="player">
				{!isEditting
					? <span className="player-name">{playerName}</span>
					: <input type="text" required className="player-name" value={playerName} onChange={handlePlayerNameChange} />}
				<span className="player-symbol">{symbol}</span>
			</span>
			<button onClick={handleEditBtnClick}>{isEditting ? buttonLabel.editing : buttonLabel.default}</button>
		</li>
	)
}