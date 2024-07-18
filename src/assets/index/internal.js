// import from player1.js
import { playerAttacksEachOtherSubsequently } from './DOMMethods/player1';
import {
	AIAttack,
	randomlyAddShiptoAI,
	getRandomGridValue,
} from './DOMMethods/player2';
import createPlayer from './player/player';

const roundCounter = 1;
const player1 = createPlayer('Human'); // how to link the players to their respective board?
const player2 = createPlayer('AI');

const getRoundCounter = function () {
	return roundCounter;
};

const getPlayer1 = function () {
	return player1;
};

const getPlayer2 = function () {
	return player2;
};

export {
	getRoundCounter,
	playerAttacksEachOtherSubsequently,
	getPlayer1,
	getPlayer2,
	AIAttack,
	randomlyAddShiptoAI,
	getRandomGridValue,
};
