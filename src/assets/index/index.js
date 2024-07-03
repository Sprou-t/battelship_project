// helps manage actions in the DOM
import './index.css';
import './reset.css';
import gameBoard from './gameboard/gameboard';
import createShip from './ship/ship';
import { addBoard1Grids, addBoard2Grids, clickGrid, getGridCoordinate } from './boardGrid/grid';

const createPage = (function () {
	const body = document.querySelector('body');

	const header = document.createElement('div');
	header.classList.add('header');
	const boardDiv = document.createElement('div');
	boardDiv.classList.add('boardDiv');

	// create 2 boards & 1 text line
	const player1Board = document.createElement('div');
	player1Board.classList.add('player1Board');
	const player2Board = document.createElement('div');
	player2Board.classList.add('player2Board');
	const textIndicator = document.createElement('p');
	textIndicator.textContent = 'Battleship!';

	addBoard1Grids(player1Board);
	addBoard2Grids(player2Board);

	header.append(textIndicator);
	boardDiv.append(player1Board, player2Board);
	body.append(header, boardDiv);
})();

const gameController = (function () {
	// TODO:
	// use coordinate for ship placement
	// create a button to orientate the ship in another mod
	// use the grid coordinate on the gameboard class to see if attack hit or missed
	
})();
