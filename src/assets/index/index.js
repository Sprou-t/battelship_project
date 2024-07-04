// helps manage actions in the DOM
import './index.css';
import './reset.css';
import createPage from './DOMMethods/DOM';
import { getGridCoordinate } from './boardGrid/grid';

const gameController = (function () {
	createPage();
	// TODO
	// Select ship first, which will register the length
	// click on the grid to place the getGridCoordinate.The getGridCoordinate
	// should be used. The gameBoard class should be updated
	// Also implement the logic of changing the ship's orientation
})();
