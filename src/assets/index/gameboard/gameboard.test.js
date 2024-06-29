import createShip from '../ship/ship';
import gameBoard from './gameboard';

describe('test shipPlacement function to check for correct placement', () => {
	const { board, shipPlacement } = gameBoard(); // Destructure board and shipPlacement

	test('horizontal shipPlacement', () => {
		const ship1 = createShip(3);
		shipPlacement(false, 0, 2, ship1.length, ship1); // Use shipPlacement directly
		expect(board[0][2]).toEqual(ship1); // Access board directly
		expect(board[1][2]).toEqual(ship1);
		expect(board[2][2]).toEqual(ship1);
	});
});
