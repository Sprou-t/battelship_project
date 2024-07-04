/* eslint-disable no-param-reassign */
import { addBoard1Grids, addBoard2Grids } from '../boardGrid/grid';

const getSelectedShipLength = function (ship) {
	let shipLength;
	if (ship.textContent === 'Carrier') {
		shipLength = 5;
	} else if (ship.textContent === 'BattleShip') {
		shipLength = 4;
	} else if (ship.textContent === 'Destroyer') {
		shipLength = 3;
	} else if (ship.textContent === 'Submarine') {
		shipLength = 3;
	} else {
		shipLength = 2;
	}
	return shipLength;
};

const selectShip = function () {
	const shipList = document.querySelectorAll('.ship');
	shipList.forEach((ship) => {
		ship.addEventListener('click', () => {
			ship.classList.add('select');
			const shipLength = getSelectedShipLength(ship);
			// use the shiplength on to the class?
			// get orientation and use on class too?
		});
	});
};

const changeOrientationBtn = function (orientationBtn) {
	// INCOMPLETE: need to link to GameBoard function
	orientationBtn.addEventListener('click', () => {
		if (orientationBtn.textContent === 'Horizontal') {
			orientationBtn.textContent = 'Vertical';
		} else {
			orientationBtn.textContent = 'Horizontal';
		}
	});
};

const createPage = function () {
	const body = document.querySelector('body');

	const header = document.createElement('div');
	header.classList.add('header');
	const boardDiv = document.createElement('div');
	boardDiv.classList.add('boardDiv');

	// create 2 boards, 1 ship div &  1 text line
	const shipDiv = document.createElement('div');
	shipDiv.classList.add('shipDiv');
	const orientationBtn = document.createElement('button');
	orientationBtn.classList.add('orientationBtn');
	orientationBtn.textContent = 'Horizontal';
	const shipArea = document.createElement('div');
	shipArea.classList.add('shipArea');

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

	shipArea.append(carrierShip, battleship, destroyer, submarine, patrolBoat);

	const player1Board = document.createElement('div');
	player1Board.classList.add('player1Board');
	const player2Board = document.createElement('div');
	player2Board.classList.add('player2Board');
	const textIndicator = document.createElement('p');
	textIndicator.textContent = 'Battleship!';

	addBoard1Grids(player1Board);
	addBoard2Grids(player2Board);

	header.append(textIndicator);
	shipDiv.append(orientationBtn, shipArea);
	boardDiv.append(shipDiv, player1Board, player2Board);
	body.append(header, boardDiv);
	selectShip();
	changeOrientationBtn(orientationBtn);
};

export default createPage;
