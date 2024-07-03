// helps manage actions in the DOM
import './index.css';
import './reset.css';
import gameBoard from './gameboard/gameboard';
import createShip from './ship/ship';
import {
	addBoard1Grids,
	addBoard2Grids,
	clickGrid,
	getGridCoordinate,
} from './boardGrid/grid';

const createPage = (function () {
	const body = document.querySelector('body');

	const header = document.createElement('div');
	header.classList.add('header');
	const boardDiv = document.createElement('div');
	boardDiv.classList.add('boardDiv');

	// create 2 boards, 1 ship div &  1 text line
	const shipDiv = document.createElement('div');
	shipDiv.classList.add('shipDiv');

	const carrierShip = document.createElement('p');
	carrierShip.textContent = 'Carrier';
	carrierShip.classList.add('Carrier', 'ship');

	const battleship = document.createElement('p');
	battleship.textContent = 'Battleship';
	battleship.classList.add('battleship', 'ship');

	const destroyer = document.createElement('p');
	destroyer.textContent = 'Destroyer';
	destroyer.classList.add('destroyer', 'ship');

	const submarine = document.createElement('p');
	submarine.textContent = 'Submarine';
	submarine.classList.add('submarine', 'ship');

	const patrolBoat = document.createElement('p');
	patrolBoat.textContent = 'Patrol Boat';
	patrolBoat.classList.add('patrolBoat', 'ship');

	shipDiv.append(carrierShip, battleship, destroyer, submarine, patrolBoat);


	const player1Board = document.createElement('div');
	player1Board.classList.add('player1Board');
	const player2Board = document.createElement('div');
	player2Board.classList.add('player2Board');
	const textIndicator = document.createElement('p');
	textIndicator.textContent = 'Battleship!';

	addBoard1Grids(player1Board);
	addBoard2Grids(player2Board);

	header.append(textIndicator);
	boardDiv.append(shipDiv, player1Board, player2Board);
	body.append(header, boardDiv);
})();

const gameController = (function () {
	// TODO
	// add additional class for clicked ships for styling
	// use coordinate for ship placement
	// create a button to orientate the ship in another mod
	// use the grid coordinate on the gameboard class to see if attack hit or missed
})();
