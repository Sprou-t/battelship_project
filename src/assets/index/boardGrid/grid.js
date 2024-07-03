const getGridCoordinate = function (gridIndex) {
	const x = gridIndex % 10;
	const y = parseInt(gridIndex / 10, 10);
	console.log(x);
	console.log(y);
	return { x, y };
};

const clickGrid = function (grid, gridIndex) {
	grid.addEventListener('click', () => {
		// eslint-disable-next-line no-param-reassign
		grid.textContent = 'X';
		// register the coordinates to gameBoard function
		getGridCoordinate(gridIndex);
	});
};

// create a function that generates 100 grids in each board
const addBoard2Grids = function (playerBoard) {
	const length = 10;
	// const gridList = [];
	for (let i = 0; i < length * length; i += 1) {
		const grid = document.createElement('div');
		grid.classList.add('grid');
		clickGrid(grid, i);
		playerBoard.append(grid);
	}
};

const addBoard1Grids = function (playerBoard) {
	const length = 10;
	for (let i = 0; i < length * length; i += 1) {
		const grid = document.createElement('div');
		grid.classList.add('grid');
		playerBoard.append(grid);
	}
};

export { addBoard1Grids, addBoard2Grids, getGridCoordinate };
