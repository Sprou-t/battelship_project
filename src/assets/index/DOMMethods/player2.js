/* eslint-disable no-param-reassign */
import { getGridIndexFromCoordinate } from '../boardGrid/grid';

import createShip from '../ship/ship';

// get a random value from 0 to 9 for grid index
const getRandomGridValue = function () {
	const randomValue = Math.floor(Math.random() * 10);
	return randomValue;
};

// randomly get an orientation: horizontal or vertical
const getRandomOrientationValue = function () {
	const randomValue = Math.floor(Math.random() * 2);
	return randomValue;
};

const randomlyAddShiptoAI = function (AIplayer) {
	const listOfShipObj = [
		createShip(5),
		createShip(4),
		createShip(3),
		createShip(3),
		createShip(2),
	];
	const orientationList = ['Horizontal', 'Vertical'];

	// using getRandomGridValue, access the grids. Continue finding until
	// we find a grid that has enuf space for the entire ship and is not alld
	// occupied
	let x;
	let y;
	let orientation;
	for (let i = 0; i < listOfShipObj.length; i += 1) {
		const shipObj = listOfShipObj[i];
		// continue finding the grid as long as grid selected is not available
		do {
			x = getRandomGridValue();
			y = getRandomGridValue();
			orientation = orientationList[getRandomOrientationValue()];
			// get the grid and check whether it has enuf space
			AIplayer.ownBoard.shipPlacement(
				orientation,
				x,
				y,
				shipObj.length,
				shipObj
			);
		} while (!AIplayer.ownBoard.checkSpace);

		// change x & y to index and add them to DOM in the board
		const gridIndex = y * 10 + x;
		// iterate over the ship length
		if (orientation === 'Horizontal') {
			for (let j = 0; j < shipObj.length; j += 1) {
				const gridToPlaceShip = document.querySelector(
					`[data-grid-num="${gridIndex + j}"]`
				);
				gridToPlaceShip.classList.add('shipPlaced');
			}
		} else {
			for (let j = 0; j < shipObj.length; j += 1) {
				const gridToPlaceShip = document.querySelector(
					`[data-grid-num="${gridIndex + j * 10}"]`
				);
				gridToPlaceShip.classList.add('shipPlaced');
			}
		}
	}
};

export { randomlyAddShiptoAI, getRandomGridValue };
