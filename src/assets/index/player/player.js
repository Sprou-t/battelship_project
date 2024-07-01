import createBoard from '../gameboard/gameboard';

function createPlayer(type) {
	return {
		type,
		ownBoard: createBoard(),
	};
}

export default createPlayer;
