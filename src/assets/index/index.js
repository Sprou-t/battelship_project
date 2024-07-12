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
	selectShip();
	// after adding ships, the match immediately begins as players attack!
	addShipToBoard();
})();
