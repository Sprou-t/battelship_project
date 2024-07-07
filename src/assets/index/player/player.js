import createBoard from '../gameboard/gameboard';

function createPlayer(type) {
	return {
		type,
		ownBoard: createBoard(),
	};
	// if it's AI, it has its own properties like own ship placement and attacks
}

export default createPlayer;
