/* eslint-disable no-param-reassign */
import {
	addBoard1Grids,
	addBoard2Grids,
	getGridCoordinate,
	getGridIndex,
} from '../boardGrid/grid';

let orientationValue = 'Horizontal';
let selectedShip;
let selectedShipLength;

const getSelectedShipLength = function () {
	if (selectedShip === 'Carrier') {
		selectedShipLength = 5;
	} else if (selectedShip === 'Battleship') {
		selectedShipLength = 4;
	} else if (selectedShip === 'Destroyer' || selectedShip === 'Submarine') {
		selectedShipLength = 3;
	} else {
		selectedShipLength = 2;
	}
	return selectedShipLength;
};

const addShipToBoard = function (player) {
	// get grid index from addBoard1Grid, process it with getGridCoordinate
	const gridList = document.querySelectorAll('.grid.one');
	gridList.forEach((grid) => {
		grid.addEventListener('click', () => {
			if (selectedShip) {
				orientationValue =
					document.querySelector('.orientationBtn').textContent;
				const { x, y } = getGridCoordinate(grid);
				let firstGridIndex = getGridIndex(grid);
				const firstGridElement = document.querySelector(
					`[data-index = "${firstGridIndex}"]`
				);
				firstGridElement.textContent = 'O';

				player.ownBoard.shipPlacement(
					orientationValue,
					x,
					y,
					selectedShipLength,
					selectedShip
				);

				if (orientationValue === 'Vertical') {
					// if vertical
					for (let i = 1; i < selectedShipLength; i += 1) {
						// use the dataset.index to locate the subsequent grids
						// if it is vertical, add 10, but if it is horizontal, add 1
						firstGridIndex += 10;

						const subsequentGridElement = document.querySelector(
							`[data-index="${firstGridIndex}"]`
						);
						subsequentGridElement.textContent = 'O';
					}
				} else {
					for (let i = 1; i < selectedShipLength; i += 1) {
						// use the dataset.index to locate the subsequent grids
						// if it is vertical, add 10, but if it is horizontal, add 1
						firstGridIndex += 1;
						const subsequentGridElement = document.querySelector(
							`[data-index="${firstGridIndex}"]`
						);
						subsequentGridElement.textContent = 'O';
					}
				}
			}
		});
	});
};

const selectShip = function () {
	const shipList = document.querySelectorAll('.ship');
	shipList.forEach((ship) => {
		ship.addEventListener('click', () => {
			shipList.forEach((s) => s.classList.remove('selected'));
			ship.classList.add('selected');
			selectedShip = ship.textContent;
			selectedShipLength = getSelectedShipLength(selectedShip);
		});
	});
};

const changeShipOrientation = function () {
	const orientationBtn = document.querySelector('.orientationBtn');
	orientationBtn.addEventListener('click', () => {
		if (orientationBtn.textContent === 'Horizontal') {
			orientationBtn.textContent = 'Vertical';
			orientationValue = orientationBtn.textContent;
		} else {
			orientationBtn.textContent = 'Horizontal';
			orientationValue = orientationBtn.textContent;
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
};

export {
	createPage,
	selectShip,
	addShipToBoard,
	getSelectedShipLength,
	changeShipOrientation,
};
