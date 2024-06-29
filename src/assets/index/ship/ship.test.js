// import functions from index.js to test
import createShip from './ship';

describe('test createShip factory function', () => {
	const ship = createShip(4);
	// test isSunk status when there are no hits
	test('ship still afloat with no hits', () => {
		expect(ship.isSunk).toBe(false);
	});

	// test isSunk when hits < length
	test('ship afloat with 2 hits', () => {
		ship.isHit();
		ship.isHit();
		expect(ship.isSunk).toBe(false);
	});

	// test isSunk when hits = length
	test('ship sinks if hit rate === length', () => {
		ship.isHit();
		ship.isHit();
		expect(ship.isSunk).toBe(true);
	});
});