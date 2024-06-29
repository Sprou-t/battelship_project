import createShip from '../ship/ship';

function gameBoard() {
	const boardLength = 10;
	const board = Array(boardLength)
		.fill(null)
		.map(() => Array(boardLength).fill({ hit: false, ship: undefined }));

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

	return { board, shipPlacement }; // Return both board and shipPlacement
}

export default gameBoard;
