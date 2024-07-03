// helps manage actions in the DOM
import './index.css';
import './reset.css';
import gameBoard from './gameboard/gameboard';
import createShip from './ship/ship';

// create a function that generates 100 grids in each board
const addBoardGrids = function (playerBoard) {
	const length = 10;
	for (let i = 0; i < length * length; i += 1) {
		const grid = document.createElement('div');
		grid.classList.add('grid');
		playerBoard.append(grid);
	}
};

const createPage = (function () {
	const body = document.querySelector('body');

	const header = document.createElement('div');
	header.classList.add('header');
	const boardDiv = document.createElement('div');
	boardDiv.classList.add('boardDiv');

	// create 2 boards & 1 text line
	const player1Board = document.createElement('div');
	const player2Board = document.createElement('div');
	const textIndicator = document.createElement('p');
	textIndicator.textContent = 'Battleship!';

	addBoardGrids(player1Board);
	addBoardGrids(player2Board);

	header.append(textIndicator);
	boardDiv.append(player1Board, player2Board);
	body.append(header, boardDiv);
})();
