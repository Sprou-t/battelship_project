const getGridIndex = function (grid) {
	const gridIndex = Math.floor(grid.dataset.index);
	return gridIndex;
};

const getGridCoordinate = function (grid) {
	const gridIndex = grid.dataset.index;
	const x = gridIndex % 10;
	const y = Math.floor(gridIndex / 10);
	return { x, y };
};

// const markOutGrid = function (grid) {
// 	grid.addEventListener('click', () => {
// 		// eslint-disable-next-line no-param-reassign
// 		grid.textContent = 'X';
// 		const gridIndex = grid.dataset.index;
// 	});
// };

// create a function that generates 100 grids in each board
const addBoard2Grids = function (playerBoard) {
	// const gridList = [];
	for (let i = 0; i < 100; i += 1) {
		const grid = document.createElement('div');
		grid.classList.add('grid', 'two');
		grid.dataset.index = `2-${i}`;
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

export { addBoard1Grids, addBoard2Grids, getGridCoordinate, getGridIndex };
