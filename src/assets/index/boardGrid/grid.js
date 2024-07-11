const getPlayer1GridIndex = function (grid) {
	const gridIndex = Math.floor(grid.dataset.index);
	return gridIndex;
};

const getPlayer1GridCoordinate = function (grid) {
	const gridIndex = grid.dataset.index;
	const x = gridIndex % 10;
	const y = Math.floor(gridIndex / 10);
	return { x, y };
};

const getPlayer2GridCoordinate = function (grid) {
	const gridIndex = grid.dataset.gridNum;
	const x = gridIndex % 10;
	const y = Math.floor(gridIndex / 10);
	return { x, y };
};

const getGridIndexFromCoordinate = function (x, y) {
	const gridIndex = y * 10 + x;
	return gridIndex;
};

// create a function that generates 100 grids in each board
const addBoard2Grids = function (playerBoard) {
	// const gridList = [];
	for (let i = 0; i < 100; i += 1) {
		const grid = document.createElement('div');
		grid.classList.add('grid', 'secondPlayer', `${i}`);
		grid.dataset.gridNum = i; // Change dataset attribute to gridNum
		// markOutGrid(grid, i);
		playerBoard.append(grid);
	}
};

const addBoard1Grids = function (playerBoard) {
	for (let i = 0; i < 100; i += 1) {
		const grid = document.createElement('div');
		grid.classList.add('grid', 'one');
		// give each element a new data attribute called index
		grid.dataset.index = i;
		playerBoard.append(grid);
	}
};

export {
	getGridIndexFromCoordinate,
	addBoard1Grids,
	addBoard2Grids,
	getPlayer1GridCoordinate,
	getPlayer1GridIndex,
	getPlayer2GridCoordinate,
};
