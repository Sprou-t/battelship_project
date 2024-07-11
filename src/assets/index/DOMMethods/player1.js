/* eslint-disable no-param-reassign */
import {
	getPlayer1GridCoordinate,
	getPlayer2GridCoordinate,
	getPlayer1GridIndex,
	getGridIndexFromCoordinate,
} from '../boardGrid/grid';

import { getRandomGridValue } from './player2';

import createShip from '../ship/ship';

let orientationValue = 'Horizontal';
let selectedShip = null;
let selectedShipLength = null;
let selectedShipObj = null;
let shipsPlacedByPlayer1 = 0;
// eslint-disable-next-line import/no-mutable-exports
let roundCounter = 1;

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

const selectShipHandler = function (event) {
	const shipList = document.querySelectorAll('.ship');
	shipList.forEach((s) => s.classList.remove('selected'));
	event.target.classList.add('selected');
	selectedShip = event.target.textContent;
	selectedShipLength = getSelectedShipLength(selectedShip);
	selectedShipObj = createShip(selectedShipLength);
};

const selectShip = function () {
	const shipList = document.querySelectorAll('.ship');
	shipList.forEach((ship) => {
		ship.addEventListener('click', selectShipHandler);
	});
};

const removeSelectedShip = function () {
	// remove event listeener for selected ship
	const selectedShipClass = (
		selectedShip.charAt(0).toLowerCase() + selectedShip.slice(1)
	)
		.split(' ')
		.join('');

	const shipUnavailableForPlacement = document.querySelector(
		`.${selectedShipClass}`
	);
	if (shipUnavailableForPlacement) {
		shipUnavailableForPlacement.removeEventListener(
			'click',
			selectShipHandler
		);
		shipUnavailableForPlacement.classList.add('removed');
	}
	selectedShip = null;
};

const addShipToGridEventListener = function (grid, player1, player2) {
	return function handleGridClick() {
		if (selectedShip) {
			const { x, y } = getPlayer1GridCoordinate(grid);
			let firstGridIndex = getPlayer1GridIndex(grid);
			const firstGridElement = document.querySelector(
				`[data-index="${firstGridIndex}"]`
			);

			player1.ownBoard.shipPlacement(
				orientationValue,
				x,
				y,
				selectedShipLength,
				selectedShipObj
			);
			if (player1.ownBoard.checkSpace) {
				if (orientationValue === 'Vertical') {
					firstGridElement.style.backgroundColor = 'green';
					for (let i = 1; i < selectedShipLength; i += 1) {
						firstGridIndex += 10;
						const subsequentGridElement = document.querySelector(
							`[data-index="${firstGridIndex}"]`
						);
						subsequentGridElement.style.backgroundColor = 'green';
						subsequentGridElement.classList.add('shipPlaced');
					}
				} else if (orientationValue === 'Horizontal') {
					firstGridElement.style.backgroundColor = 'green';
					for (let i = 1; i < selectedShipLength; i += 1) {
						firstGridIndex += 1;
						const subsequentGridElement = document.querySelector(
							`[data-index="${firstGridIndex}"]`
						);
						subsequentGridElement.style.backgroundColor = 'green';
						subsequentGridElement.classList.add('shipPlaced');
					}
				}
				// Remove event listener after ship placement
				grid.removeEventListener('click', handleGridClick);
				removeSelectedShip();
				shipsPlacedByPlayer1 += 1;
				if (shipsPlacedByPlayer1 > 4) {
					// eslint-disable-next-line no-use-before-define
					playerAttacksEachOtherSubsequently(player1, player2);
				}
			} else {
				alert('Choose another grid!');
			}
		}
	};
};

const addShipToBoard = function (player1, player2) {
	// get grid index from addBoard1Grid, process it with getGridCoordinate
	const gridList = document.querySelectorAll('.grid.one');
	gridList.forEach((grid) => {
		grid.addEventListener(
			'click',
			addShipToGridEventListener(grid, player1, player2)
		);
	});
};

const player1Attack = function (player2) {
	// add event listener to all the grids
	const player2Grids = document.querySelectorAll(
		'.grid.secondPlayer:not(.marked)'
	);
	player2Grids.forEach((grid) => {
		grid.addEventListener(
			'click',
			() => {
				const { x, y } = getPlayer2GridCoordinate(grid);
				player2.ownBoard.receiveAttack(x, y);
				// color the grid red if it is occupied by a ship
				if (grid.classList.contains('shipPlaced')) {
					grid.style.backgroundColor = 'red';
				} else {
					grid.style.backgroundColor = 'grey';
				}
				grid.classList.add('marked');
				roundCounter += 1;
				console.log(roundCounter);
			},
			{ once: true }
		);
	});
};
const attackedGrids = new Set();

const AIAttack = function (player1) {
	// get random x & y val
	let x;
	let y;
	let gridIndex;
	do {
		x = getRandomGridValue();
		y = getRandomGridValue();
		// change x & y coordinate into grid index
		gridIndex = getGridIndexFromCoordinate(x, y);
	} while (attackedGrids.has(gridIndex));
	attackedGrids.add(gridIndex);
	const grid = document.querySelector(`[data-index="${gridIndex}"]`);
	player1.ownBoard.receiveAttack(x, y);
	if (grid.classList.contains('shipPlaced')) {
		grid.style.backgroundColor = 'red';
	} else {
		grid.style.backgroundColor = 'grey';
	}
	// eslint-disable-next-line no-import-assign
	roundCounter += 1;
	console.log(roundCounter);
};

const playerAttacksEachOtherSubsequently = function (player1, player2) {
	if (roundCounter % 2 === 1) {
		player1Attack(player2);
	} else if (roundCounter % 2 === 0) {
		AIAttack(player1);
	}
};

export {
	changeShipOrientation,
	player1Attack,
	selectShip,
	addShipToBoard,
	getSelectedShipLength,
};
