function gameBoard() {
	const boardLength = 10;

	const board = Array(boardLength)
		.fill(null)
		.map((row) =>
			Array(boardLength)
				.fill(null)
				.map((cell) => ({ hit: false, ship: undefined }))
		);

	let missedAttack = 0;

	function shipPlacement(orientation, x, y, length, ship) {
		let checkSpace = true;

		if (!orientation) {
			for (let i = 0; i < length; i += 1) {
				if (board[x + i][y].ship !== undefined) {
					checkSpace = false;
					break;
				}
			}
		} else {
			for (let j = 0; j < length; j += 1) {
				if (board[x][y + j].ship !== undefined) {
					checkSpace = false;
					break;
				}
			}
		}

		if (checkSpace) {
			if (!orientation) {
				for (let i = 0; i < length; i += 1) {
					board[x + i][y].ship = ship;
				}
			} else {
				for (let j = 0; j < length; j += 1) {
					board[x][y + j].ship = ship;
				}
			}
		}
	}

	// take coordinates and fire off at that coordinate
	function receiveAttack(x, y) {
		// if attack missed, record down the hit & miss counter
		if (board[x][y].ship === undefined) {
			board[x][y].hit = true;
			missedAttack += 1;
			console.log(missedAttack);
		}

		// if attack hit, record down hit and increase ship hit count
		if (board[x][y].ship !== undefined) {
			board[x][y].hit = true;
			board[x][y].ship.isHit();

			if (board[x][y].ship.isSunk) {
				// alert that the ship is sunk!
			}
		}
	}

	return { board, missedAttack, shipPlacement, receiveAttack }; // Return both board and shipPlacement
}

export default gameBoard;
