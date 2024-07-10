import createPlayer from './player';
import createShip from '../ship/ship';

// test the createboard function by testing if the shipPlacement and 
// missed attack works
describe('test createPlayer function', () => {
	const player1 = createPlayer('human');
	const ship1 = createShip(3);

	test('player has their own gameboard', () => {
		expect(player1.ownBoard.missedAttack).toBe(0);
		player1.ownBoard.shipPlacement('Horizontal', 1, 1, 3, ship1);

		// test ship presence
		expect(player1.ownBoard.board[2][2].ship).toBe(undefined);
		expect(player1.ownBoard.board[1][1].ship).toBe(ship1);

		// test attack missed scenario
		player1.ownBoard.receiveAttack(3, 4);
		expect(player1.ownBoard.missedAttack).toBe(1);

		// test attack hit
		player1.ownBoard.receiveAttack(2, 1);
		expect(player1.ownBoard.missedAttack).toBe(1);
		expect(ship1.hitStat).toBe(1);
	});
});
