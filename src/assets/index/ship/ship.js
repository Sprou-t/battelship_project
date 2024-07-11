// factory function for createShip should have ship length, hit count,
// sunk status

function createShip(length) {
	return {
		length,
		isSunk: false,
		hitStat: 0,
		isHit() {
			this.hitStat += 1;
			if (this.hitStat === this.length) {
				this.isSunk = true;
			}
			return true;
		},
	};
}

export default createShip;
