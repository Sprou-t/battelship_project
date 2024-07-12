import './index.css';
import './reset.css';
import createPage from './DOMMethods/DOM';
import {
	changeShipOrientation,
	selectShip,
	addShipToBoard,
	// restartGame
} from './DOMMethods/player1';

import { randomlyAddShiptoAI } from './DOMMethods/player2';

const gameController = (function () {
	createPage();
	changeShipOrientation();
	selectShip();
	// after adding ships, the match immediately begins as players attack!
	addShipToBoard();
})();
