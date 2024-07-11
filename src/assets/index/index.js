import './index.css';
import './reset.css';
import {
	player1Attack,
	createPage,
	selectShip,
	addShipToBoard,
	changeShipOrientation,
	randomlyAddShiptoAI,
} from './DOMMethods/DOM';
import createPlayer from './player/player';

const gameController = (function () {
	createPage();
	changeShipOrientation();
	const player1 = createPlayer('Human'); // how to link the players to their respective board?
	const player2 = createPlayer('AI');
	randomlyAddShiptoAI(player2);
	selectShip();
	// need to find a way to get x & y
	addShipToBoard(player1, player2); // after adding ships, the match immediately begins!
})();
