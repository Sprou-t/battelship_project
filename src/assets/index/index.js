import './index.css';
import './reset.css';
import createPage from './DOMMethods/DOM';
import createPlayer from './player/player';
import {
	changeShipOrientation,
	selectShip,
	addShipToBoard,
} from './DOMMethods/player1';

import { randomlyAddShiptoAI } from './DOMMethods/player2';

const gameController = (function () {
	createPage();
	changeShipOrientation();
	const player1 = createPlayer('Human'); // how to link the players to their respective board?
	const player2 = createPlayer('AI');
	randomlyAddShiptoAI(player2);
	selectShip();
	// after adding ships, the match immediately begins as players attack!
	addShipToBoard(player1, player2);
})();
