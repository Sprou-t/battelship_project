import './index.css';
import './reset.css';
import {
	createPage,
	selectShip,
	addShipToBoard,
	changeShipOrientation,
} from './DOMMethods/DOM';
import createPlayer from './player/player';

const gameController = (function () {
	createPage();
	changeShipOrientation();
	const player1 = createPlayer('Human'); // how to link the players to their respective board?
	const player2 = createPlayer('AI');
	selectShip();
	// need to find a way to get x & y
	addShipToBoard(player1);

	// TODO
	// seq: click on ship first which will get the length and orientation then
	// click on the grid to place the getGridCoordinate.The getGridCoordinate
	// should be used. The gameBoard class should be updated
	// Also implement the logic of changing the ship's orientation
})();
