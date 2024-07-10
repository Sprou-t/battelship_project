function createBoard() {
	const boardLength = 10;

	// Initialize the object with properties
	const boardObject = {
		board: Array(boardLength)
			.fill(null)
			.map(() =>
				Array(boardLength)
					.fill(null)
					.map(() => ({ hit: false, ship: undefined }))
			),
		missedAttack: 0,
		gameOver: false,
		checkSpace: true,

		// Method for ship placement
		shipPlacement(orientation, x, y, length, ship) {
			this.checkSpace = true;

			// Check if the grid has already been selected by another ship or
			// if the grids are not enough to fit the entire ship
			if (orientation === 'Horizontal') {
				for (let i = 0; i < length; i += 1) {
					if (x + i > 9 || this.board[x + i][y].ship !== undefined) {
						this.checkSpace = false;
						console.log(this.checkSpace);
						break;
					}
				}
			} else {
				for (let j = 0; j < length; j += 1) {
					if (y + j > 9 || this.board[x][y + j].ship !== undefined) {
						this.checkSpace = false;
						break;
					}
				}
			}

			if (this.checkSpace) {
				if (orientation === 'Horizontal') {
					for (let i = 0; i < length; i += 1) {
						this.board[x + i][y].ship = ship;
					}
				} else {
					for (let j = 0; j < length; j += 1) {
						this.board[x][y + j].ship = ship;
					}
				}
			}
		},

		// Method for receiving attack
		receiveAttack(x, y) {
			// If attack missed, record the hit & miss counter
			if (this.board[x][y].ship === undefined) {
				this.board[x][y].hit = true;
				this.missedAttack += 1;
			}

			// If attack hit, record the hit and increase ship hit count
			if (this.board[x][y].ship !== undefined) {
				this.board[x][y].hit = true;
				this.board[x][y].ship.isHit();

				if (this.board[x][y].ship.isSunk) {
					// Alert that the ship is sunk!
				}
			}
		},

		// Method for reporting game over
		reportGameOver(
			ship1Sinkstatus,
			ship2Sinkstatus,
			ship3Sinkstatus,
			ship4Sinkstatus,
			ship5Sinkstatus
		) {
			if (
				ship1Sinkstatus &&
				ship2Sinkstatus &&
				ship3Sinkstatus &&
				ship4Sinkstatus &&
				ship5Sinkstatus
			) {
				this.gameOver = true;
			}
		},
	};

	return boardObject; // Return the object with properties and methods
}

export default createBoard;
