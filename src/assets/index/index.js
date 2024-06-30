import './index.css';
import './reset.css';
import gameBoard from './gameboard/gameboard';
import createShip from './ship/ship';

const board = gameBoard();
const ship1 = createShip(3);
board.shipPlacement(0, 1, 2, 3, ship1);
board.receiveAttack(2, 3);
