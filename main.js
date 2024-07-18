/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/index/DOMMethods/DOM.js":
/*!********************************************!*\
  !*** ./src/assets/index/DOMMethods/DOM.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _boardGrid_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../boardGrid/grid */ "./src/assets/index/boardGrid/grid.js");
/* eslint-disable no-param-reassign */

const createPage = function () {
  const body = document.querySelector('body');
  const header = document.createElement('div');
  header.classList.add('header');
  const boardDiv = document.createElement('div');
  boardDiv.classList.add('boardDiv');

  // create 2 boards, 1 ship div &  1 text line
  const shipDiv = document.createElement('div');
  shipDiv.classList.add('shipDiv');
  const orientationBtn = document.createElement('button');
  orientationBtn.classList.add('orientationBtn');
  orientationBtn.textContent = 'Horizontal';
  const shipArea = document.createElement('div');
  shipArea.classList.add('shipArea');
  const carrierShip = document.createElement('p');
  carrierShip.textContent = 'Carrier';
  carrierShip.classList.add('carrier', 'ship');
  const battleship = document.createElement('p');
  battleship.textContent = 'Battleship';
  battleship.classList.add('battleship', 'ship');
  const destroyer = document.createElement('p');
  destroyer.textContent = 'Destroyer';
  destroyer.classList.add('destroyer', 'ship');
  const submarine = document.createElement('p');
  submarine.textContent = 'Submarine';
  submarine.classList.add('submarine', 'ship');
  const patrolBoat = document.createElement('p');
  patrolBoat.textContent = 'Patrol Boat';
  patrolBoat.classList.add('patrolBoat', 'ship');
  shipArea.append(carrierShip, battleship, destroyer, submarine, patrolBoat);
  const player1Board = document.createElement('div');
  player1Board.classList.add('player1Board');
  const player2Board = document.createElement('div');
  player2Board.classList.add('player2Board');
  const textIndicator = document.createElement('p');
  textIndicator.classList.add('textIndicator');
  textIndicator.textContent = 'Place all your ships!';
  (0,_boardGrid_grid__WEBPACK_IMPORTED_MODULE_0__.addBoard1Grids)(player1Board);
  (0,_boardGrid_grid__WEBPACK_IMPORTED_MODULE_0__.addBoard2Grids)(player2Board);
  header.append(textIndicator);
  shipDiv.append(orientationBtn, shipArea);
  boardDiv.append(shipDiv, player1Board, player2Board);
  body.append(header, boardDiv);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPage);

/***/ }),

/***/ "./src/assets/index/DOMMethods/player1.js":
/*!************************************************!*\
  !*** ./src/assets/index/DOMMethods/player1.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addShipToBoard: () => (/* binding */ addShipToBoard),
/* harmony export */   changeShipOrientation: () => (/* binding */ changeShipOrientation),
/* harmony export */   getSelectedShipLength: () => (/* binding */ getSelectedShipLength),
/* harmony export */   player1Attack: () => (/* binding */ player1Attack),
/* harmony export */   selectShip: () => (/* binding */ selectShip)
/* harmony export */ });
/* harmony import */ var _boardGrid_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../boardGrid/grid */ "./src/assets/index/boardGrid/grid.js");
/* harmony import */ var _player_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../player/player */ "./src/assets/index/player/player.js");
/* harmony import */ var _player2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player2 */ "./src/assets/index/DOMMethods/player2.js");
/* harmony import */ var _ship_ship__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ship/ship */ "./src/assets/index/ship/ship.js");
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DOM */ "./src/assets/index/DOMMethods/DOM.js");
/* eslint-disable no-param-reassign */





let orientationValue = 'Horizontal';
let selectedShip = null;
let selectedShipLength = null;
let selectedShipObj = null;
let shipsPlacedByPlayer1 = 0;

// eslint-disable-next-line import/no-mutable-exports
let roundCounter = 1;
let player1 = (0,_player_player__WEBPACK_IMPORTED_MODULE_1__["default"])('Human'); // how to link the players to their respective board?
let player2 = (0,_player_player__WEBPACK_IMPORTED_MODULE_1__["default"])('AI');
const changeShipOrientation = function () {
  const orientationBtn = document.querySelector('.orientationBtn');
  orientationBtn.addEventListener('click', () => {
    if (orientationBtn.textContent === 'Horizontal') {
      orientationBtn.textContent = 'Vertical';
      orientationValue = orientationBtn.textContent;
    } else {
      orientationBtn.textContent = 'Horizontal';
      orientationValue = orientationBtn.textContent;
    }
  });
};
const getSelectedShipLength = function () {
  if (selectedShip === 'Carrier') {
    selectedShipLength = 5;
  } else if (selectedShip === 'Battleship') {
    selectedShipLength = 4;
  } else if (selectedShip === 'Destroyer' || selectedShip === 'Submarine') {
    selectedShipLength = 3;
  } else {
    selectedShipLength = 2;
  }
  return selectedShipLength;
};
const selectShipHandler = function (event) {
  const shipList = document.querySelectorAll('.ship');
  shipList.forEach(s => s.classList.remove('selected'));
  event.target.classList.add('selected');
  selectedShip = event.target.textContent;
  selectedShipLength = getSelectedShipLength(selectedShip);
  selectedShipObj = (0,_ship_ship__WEBPACK_IMPORTED_MODULE_3__["default"])(selectedShipLength);
};
const selectShip = function () {
  const shipList = document.querySelectorAll('.ship');
  shipList.forEach(ship => {
    ship.addEventListener('click', selectShipHandler);
  });
};
const removeSelectedShip = function () {
  // remove event listeener for selected ship
  const selectedShipClass = (selectedShip.charAt(0).toLowerCase() + selectedShip.slice(1)).split(' ').join('');
  const shipUnavailableForPlacement = document.querySelector(`.${selectedShipClass}`);
  if (shipUnavailableForPlacement) {
    shipUnavailableForPlacement.removeEventListener('click', selectShipHandler);
    shipUnavailableForPlacement.classList.add('removed');
  }
  selectedShip = null;
};
const addShipToGridEventListener = function (grid) {
  return function handleGridClick() {
    if (selectedShip) {
      const {
        x,
        y
      } = (0,_boardGrid_grid__WEBPACK_IMPORTED_MODULE_0__.getPlayer1GridCoordinate)(grid);
      let firstGridIndex = (0,_boardGrid_grid__WEBPACK_IMPORTED_MODULE_0__.getPlayer1GridIndex)(grid);
      const firstGridElement = document.querySelector(`[data-index="${firstGridIndex}"]`);
      player1.ownBoard.shipPlacement(orientationValue, x, y, selectedShipLength, selectedShipObj);
      if (player1.ownBoard.checkSpace) {
        if (orientationValue === 'Vertical') {
          firstGridElement.style.backgroundColor = 'green';
          for (let i = 1; i < selectedShipLength; i += 1) {
            firstGridIndex += 10;
            const subsequentGridElement = document.querySelector(`[data-index="${firstGridIndex}"]`);
            subsequentGridElement.style.backgroundColor = 'green';
            subsequentGridElement.classList.add('shipPlaced');
          }
        } else if (orientationValue === 'Horizontal') {
          firstGridElement.style.backgroundColor = 'green';
          for (let i = 1; i < selectedShipLength; i += 1) {
            firstGridIndex += 1;
            const subsequentGridElement = document.querySelector(`[data-index="${firstGridIndex}"]`);
            subsequentGridElement.style.backgroundColor = 'green';
            subsequentGridElement.classList.add('shipPlaced');
          }
        }
        // Remove event listener after ship placement
        grid.removeEventListener('click', handleGridClick);
        removeSelectedShip();
        shipsPlacedByPlayer1 += 1;
        if (shipsPlacedByPlayer1 > 4) {
          // eslint-disable-next-line no-use-before-define
          const textIndicator = document.querySelector('.textIndicator');
          textIndicator.textContent = 'Match begins! Player 1 attack!';
          // eslint-disable-next-line no-use-before-define
          player1Attack(player1, player2);
          (0,_player2__WEBPACK_IMPORTED_MODULE_2__.randomlyAddShiptoAI)(player2);
        }
      } else {
        alert('Choose another grid!');
      }
    }
  };
};
const addShipToBoard = function () {
  // get grid index from addBoard1Grid, process it with getGridCoordinate
  const gridList = document.querySelectorAll('.grid.one');
  gridList.forEach(grid => {
    grid.addEventListener('click', addShipToGridEventListener(grid));
  });
};
const player1Attack = function () {
  const player2Grids = document.querySelectorAll('.grid.secondPlayer:not(.marked)');
  const player1AttackFunction = function (event) {
    const grid = event.target;
    // eslint-disable-next-line no-undef
    const {
      x,
      y
    } = (0,_boardGrid_grid__WEBPACK_IMPORTED_MODULE_0__.getPlayer2GridCoordinate)(grid);
    player2.ownBoard.receiveAttack(x, y);
    // color the grid red if it is occupied by a ship
    if (grid.classList.contains('shipPlaced')) {
      grid.style.backgroundColor = 'red';
    } else {
      grid.style.backgroundColor = 'grey';
    }
    grid.classList.add('marked');
    roundCounter += 1;
    player2Grids.forEach(g => {
      g.removeEventListener('click', player1AttackFunction);
    });
    player2.ownBoard.reportGameOver();
    // eslint-disable-next-line no-use-before-define
    playerAttacksEachOtherSubsequently();
  };
  if (!player2.ownBoard.gameOver) {
    player2Grids.forEach(grid => {
      // eslint-disable-next-line no-use-before-define
      grid.addEventListener('click', player1AttackFunction);
    });
  } else {
    setTimeout(() => {
      alert('Player 1 wins!');
    }, 0);
    // eslint-disable-next-line no-use-before-define
    restartGame();
  }
};
const attackedGrids = new Set();
const AIAttack = function () {
  // get random x & y val
  let x;
  let y;
  let gridIndex;
  do {
    x = (0,_player2__WEBPACK_IMPORTED_MODULE_2__.getRandomGridValue)();
    y = (0,_player2__WEBPACK_IMPORTED_MODULE_2__.getRandomGridValue)();
    // change x & y coordinate into grid index
    gridIndex = (0,_boardGrid_grid__WEBPACK_IMPORTED_MODULE_0__.getGridIndexFromCoordinate)(x, y);
  } while (attackedGrids.has(gridIndex));
  attackedGrids.add(gridIndex);
  const grid = document.querySelector(`[data-index="${gridIndex}"]`);
  player1.ownBoard.receiveAttack(x, y);
  player1.ownBoard.reportGameOver();
  if (!player1.ownBoard.gameOver) {
    setTimeout(() => {
      if (grid.classList.contains('shipPlaced')) {
        grid.style.backgroundColor = 'red';
      } else {
        grid.style.backgroundColor = 'grey';
      }
      player1.ownBoard.reportGameOver();
      // eslint-disable-next-line no-import-assign
      roundCounter += 1;
      // eslint-disable-next-line no-use-before-define
      playerAttacksEachOtherSubsequently();
    }, 500);
  } else {
    alert('Player 2 wins!');
  }
};
const playerAttacksEachOtherSubsequently = function () {
  if (roundCounter % 2 === 1) {
    const textIndicator = document.querySelector('.textIndicator');
    textIndicator.textContent = 'Player 1 attack!';
    player1Attack();
  } else if (roundCounter % 2 === 0) {
    const textIndicator = document.querySelector('.textIndicator');
    textIndicator.textContent = 'Player 2 attack!';
    AIAttack();
  }
};
const restartGame = function () {
  const header = document.querySelector('.header');
  const boardDiv = document.querySelector('.boardDiv');
  header.remove();
  boardDiv.remove();
  player1 = (0,_player_player__WEBPACK_IMPORTED_MODULE_1__["default"])('Human');
  player2 = (0,_player_player__WEBPACK_IMPORTED_MODULE_1__["default"])('AI');
  orientationValue = 'Horizontal';
  selectedShip = null;
  selectedShipLength = null;
  selectedShipObj = null;
  shipsPlacedByPlayer1 = 0;
  roundCounter = 1;
  (0,_DOM__WEBPACK_IMPORTED_MODULE_4__["default"])();
  changeShipOrientation();
  selectShip();
  addShipToBoard();
};


/***/ }),

/***/ "./src/assets/index/DOMMethods/player2.js":
/*!************************************************!*\
  !*** ./src/assets/index/DOMMethods/player2.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRandomGridValue: () => (/* binding */ getRandomGridValue),
/* harmony export */   randomlyAddShiptoAI: () => (/* binding */ randomlyAddShiptoAI)
/* harmony export */ });
/* harmony import */ var _boardGrid_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../boardGrid/grid */ "./src/assets/index/boardGrid/grid.js");
/* harmony import */ var _ship_ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ship/ship */ "./src/assets/index/ship/ship.js");
/* eslint-disable no-param-reassign */



// get a random value from 0 to 9 for grid index
const getRandomGridValue = function () {
  const randomValue = Math.floor(Math.random() * 10);
  return randomValue;
};

// randomly get an orientation: horizontal or vertical
const getRandomOrientationValue = function () {
  const randomValue = Math.floor(Math.random() * 2);
  return randomValue;
};
const randomlyAddShiptoAI = function (AIplayer) {
  const listOfShipObj = [(0,_ship_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(5), (0,_ship_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(4), (0,_ship_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(3), (0,_ship_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(3), (0,_ship_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(2)];
  const orientationList = ['Horizontal', 'Vertical'];

  // using getRandomGridValue, access the grids. Continue finding until
  // we find a grid that has enuf space for the entire ship and is not alld
  // occupied
  let x;
  let y;
  let orientation;
  for (let i = 0; i < listOfShipObj.length; i += 1) {
    const shipObj = listOfShipObj[i];
    // continue finding the grid as long as grid selected is not available
    do {
      x = getRandomGridValue();
      y = getRandomGridValue();
      orientation = orientationList[getRandomOrientationValue()];
      // get the grid and check whether it has enuf space
      AIplayer.ownBoard.shipPlacement(orientation, x, y, shipObj.length, shipObj);
    } while (!AIplayer.ownBoard.checkSpace);

    // change x & y to index and add them to DOM in the board
    const gridIndex = y * 10 + x;
    // iterate over the ship length
    if (orientation === 'Horizontal') {
      for (let j = 0; j < shipObj.length; j += 1) {
        const gridToPlaceShip = document.querySelector(`[data-grid-num="${gridIndex + j}"]`);
        gridToPlaceShip.classList.add('shipPlaced');
      }
    } else {
      for (let j = 0; j < shipObj.length; j += 1) {
        const gridToPlaceShip = document.querySelector(`[data-grid-num="${gridIndex + j * 10}"]`);
        gridToPlaceShip.classList.add('shipPlaced');
      }
    }
  }
};


/***/ }),

/***/ "./src/assets/index/boardGrid/grid.js":
/*!********************************************!*\
  !*** ./src/assets/index/boardGrid/grid.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addBoard1Grids: () => (/* binding */ addBoard1Grids),
/* harmony export */   addBoard2Grids: () => (/* binding */ addBoard2Grids),
/* harmony export */   getGridIndexFromCoordinate: () => (/* binding */ getGridIndexFromCoordinate),
/* harmony export */   getPlayer1GridCoordinate: () => (/* binding */ getPlayer1GridCoordinate),
/* harmony export */   getPlayer1GridIndex: () => (/* binding */ getPlayer1GridIndex),
/* harmony export */   getPlayer2GridCoordinate: () => (/* binding */ getPlayer2GridCoordinate)
/* harmony export */ });
const getPlayer1GridIndex = function (grid) {
  const gridIndex = Math.floor(grid.dataset.index);
  return gridIndex;
};
const getPlayer1GridCoordinate = function (grid) {
  const gridIndex = grid.dataset.index;
  const x = gridIndex % 10;
  const y = Math.floor(gridIndex / 10);
  return {
    x,
    y
  };
};
const getPlayer2GridCoordinate = function (grid) {
  const gridIndex = grid.dataset.gridNum;
  const x = gridIndex % 10;
  const y = Math.floor(gridIndex / 10);
  return {
    x,
    y
  };
};
const getGridIndexFromCoordinate = function (x, y) {
  const gridIndex = y * 10 + x;
  return gridIndex;
};

// create a function that generates 100 grids in each board
const addBoard2Grids = function (playerBoard) {
  // const gridList = [];
  for (let i = 0; i < 100; i += 1) {
    const grid = document.createElement('div');
    grid.classList.add('grid', 'secondPlayer', `${i}`);
    grid.dataset.gridNum = i; // Change dataset attribute to gridNum
    // markOutGrid(grid, i);
    playerBoard.append(grid);
  }
};
const addBoard1Grids = function (playerBoard) {
  for (let i = 0; i < 100; i += 1) {
    const grid = document.createElement('div');
    grid.classList.add('grid', 'one');
    // give each element a new data attribute called index
    grid.dataset.index = i;
    playerBoard.append(grid);
  }
};


/***/ }),

/***/ "./src/assets/index/gameboard/gameboard.js":
/*!*************************************************!*\
  !*** ./src/assets/index/gameboard/gameboard.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createBoard() {
  const boardLength = 10;

  // Initialize the object with properties
  const boardObject = {
    board: Array(boardLength).fill(null).map(() => Array(boardLength).fill(null).map(() => ({
      hit: false,
      ship: undefined
    }))),
    missedAttack: 0,
    numOfShipSunk: 0,
    gameOver: false,
    checkSpace: true,
    // Method for ship placement
    shipPlacement(orientation, x, y, length, ship) {
      this.checkSpace = true;

      // Check if the grid has already been selected by another ship or
      // if the grids are not enough to fit the entire ship
      if (orientation === 'Horizontal') {
        for (let i = 0; i < length; i += 1) {
          if (x + i > 9 || this.board[x + i][y].ship !== undefined) {
            this.checkSpace = false;
            break;
          }
        }
      } else {
        for (let j = 0; j < length; j += 1) {
          if (y + j > 9 || this.board[x][y + j].ship !== undefined) {
            this.checkSpace = false;
            break;
          }
        }
      }
      if (this.checkSpace) {
        if (orientation === 'Horizontal') {
          for (let i = 0; i < length; i += 1) {
            this.board[x + i][y].ship = ship;
          }
        } else {
          for (let j = 0; j < length; j += 1) {
            this.board[x][y + j].ship = ship;
          }
        }
      }
    },
    // Method for receiving attack
    receiveAttack(x, y) {
      // If attack missed, record the hit & miss counter
      if (this.board[x][y].ship === undefined) {
        this.board[x][y].hit = true;
        this.missedAttack += 1;
      }

      // If attack hit, record the hit and increase ship hit count
      if (this.board[x][y].ship !== undefined) {
        this.board[x][y].hit = true;
        this.board[x][y].ship.isHit();
        if (this.board[x][y].ship.isSunk) {
          // Alert that the ship is sunk!
          this.numOfShipSunk += 1;
        }
      }
    },
    // Method for reporting game over
    reportGameOver() {
      if (this.numOfShipSunk === 5) {
        this.gameOver = true;
      }
    }
  };
  return boardObject; // Return the object with properties and methods
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createBoard);

/***/ }),

/***/ "./src/assets/index/player/player.js":
/*!*******************************************!*\
  !*** ./src/assets/index/player/player.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameboard_gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gameboard/gameboard */ "./src/assets/index/gameboard/gameboard.js");

function createPlayer(type) {
  return {
    type,
    ownBoard: (0,_gameboard_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])()
  };
  // if it's AI, it has its own properties like own ship placement and attacks
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPlayer);

/***/ }),

/***/ "./src/assets/index/ship/ship.js":
/*!***************************************!*\
  !*** ./src/assets/index/ship/ship.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// factory function for createShip should have ship length, hit count,
// sunk status

function createShip(length) {
  return {
    length,
    isSunk: false,
    hitStat: 0,
    isHit() {
      this.hitStat += 1;
      if (this.hitStat === this.length) {
        this.isSunk = true;
      }
    }
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createShip);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/index/index.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/index/index.css ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body{
	height: 100vh;
	display: flex;
	flex-direction: column;
	background-color: rgb(22, 22, 75);
}

.header{
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.5rem;
	color: white;
}

.boardDiv{
	flex: 4;
	height: 100%;
	display: flex;
	gap: 100px;
	padding-right: 40px;
	justify-content: flex-end;
	align-items: center;
}

.shipDiv{
	display: flex;
	flex-direction: column;
	gap: 15px;
	align-items: center;
}

.orientationBtn{
	appearance: none;
	border-radius: 10px;
	background-color: red;
	color: white;
	font-weight: 800;
	width: 90px;
}
.shipArea{
	height: 350px;
	width: 200px;
	background-color: rgb(39, 39, 136);
	border: 1px solid white;
	border-radius: 5px;
	color: white;
	font-size: 1.2rem;
	font-weight: 700;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 40px;
}

.ship:hover{
	transform: scale(1.3);

}

.selected{
	transform: scale(1.3);
}

.removed{
	text-decoration: line-through;
}

.player1Board, .player2Board{
	display: grid;
	grid-template: repeat(10,30px)/ repeat(10,30px);
}

.grid{
	height:30px;
	width: 30px;
	border: 1px solid white;
	font-size: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
}`, "",{"version":3,"sources":["webpack://./src/assets/index/index.css"],"names":[],"mappings":"AAAA;CACC,aAAa;CACb,aAAa;CACb,sBAAsB;CACtB,iCAAiC;AAClC;;AAEA;CACC,OAAO;CACP,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,iBAAiB;CACjB,YAAY;AACb;;AAEA;CACC,OAAO;CACP,YAAY;CACZ,aAAa;CACb,UAAU;CACV,mBAAmB;CACnB,yBAAyB;CACzB,mBAAmB;AACpB;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,SAAS;CACT,mBAAmB;AACpB;;AAEA;CACC,gBAAgB;CAChB,mBAAmB;CACnB,qBAAqB;CACrB,YAAY;CACZ,gBAAgB;CAChB,WAAW;AACZ;AACA;CACC,aAAa;CACb,YAAY;CACZ,kCAAkC;CAClC,uBAAuB;CACvB,kBAAkB;CAClB,YAAY;CACZ,iBAAiB;CACjB,gBAAgB;CAChB,aAAa;CACb,sBAAsB;CACtB,uBAAuB;CACvB,mBAAmB;CACnB,SAAS;AACV;;AAEA;CACC,qBAAqB;;AAEtB;;AAEA;CACC,qBAAqB;AACtB;;AAEA;CACC,6BAA6B;AAC9B;;AAEA;CACC,aAAa;CACb,+CAA+C;AAChD;;AAEA;CACC,WAAW;CACX,WAAW;CACX,uBAAuB;CACvB,eAAe;CACf,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,YAAY;AACb","sourcesContent":["body{\n\theight: 100vh;\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground-color: rgb(22, 22, 75);\n}\n\n.header{\n\tflex: 1;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-size: 1.5rem;\n\tcolor: white;\n}\n\n.boardDiv{\n\tflex: 4;\n\theight: 100%;\n\tdisplay: flex;\n\tgap: 100px;\n\tpadding-right: 40px;\n\tjustify-content: flex-end;\n\talign-items: center;\n}\n\n.shipDiv{\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 15px;\n\talign-items: center;\n}\n\n.orientationBtn{\n\tappearance: none;\n\tborder-radius: 10px;\n\tbackground-color: red;\n\tcolor: white;\n\tfont-weight: 800;\n\twidth: 90px;\n}\n.shipArea{\n\theight: 350px;\n\twidth: 200px;\n\tbackground-color: rgb(39, 39, 136);\n\tborder: 1px solid white;\n\tborder-radius: 5px;\n\tcolor: white;\n\tfont-size: 1.2rem;\n\tfont-weight: 700;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 40px;\n}\n\n.ship:hover{\n\ttransform: scale(1.3);\n\n}\n\n.selected{\n\ttransform: scale(1.3);\n}\n\n.removed{\n\ttext-decoration: line-through;\n}\n\n.player1Board, .player2Board{\n\tdisplay: grid;\n\tgrid-template: repeat(10,30px)/ repeat(10,30px);\n}\n\n.grid{\n\theight:30px;\n\twidth: 30px;\n\tborder: 1px solid white;\n\tfont-size: 30px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tcolor: white;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/index/reset.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/index/reset.css ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* 1. Use a more-intuitive box-sizing model. */
*,*::before, *::after {
box-sizing: border-box;}
/* 2. Remove default margin */
* {
margin: 0;
}

/* Typographic tweaks! */
/* 3. Add accessible line-height */
/* 4. Improve text rendering */
body {
line-height: 1.5;
-webkit-font-smoothing: antialiased;
}

/* 5. Improve media defaults */
img, picture, video, canvas, svg {
display: block;
max-width: 100%;
}

/* 6. Remove built-in form typography styles */
input, button, textarea, select {
font: inherit;
}

/* 7. Avoid text overflows */
p, h1, h2, h3, h4, h5, h6 {
overflow-wrap: break-word;
}

/* 8. Create a root stacking context */
#root, #next {
isolation: isolate;
}`, "",{"version":3,"sources":["webpack://./src/assets/index/reset.css"],"names":[],"mappings":"AAAA,8CAA8C;AAC9C;AACA,sBAAsB,CAAC;AACvB,6BAA6B;AAC7B;AACA,SAAS;AACT;;AAEA,wBAAwB;AACxB,kCAAkC;AAClC,8BAA8B;AAC9B;AACA,gBAAgB;AAChB,mCAAmC;AACnC;;AAEA,8BAA8B;AAC9B;AACA,cAAc;AACd,eAAe;AACf;;AAEA,8CAA8C;AAC9C;AACA,aAAa;AACb;;AAEA,4BAA4B;AAC5B;AACA,yBAAyB;AACzB;;AAEA,sCAAsC;AACtC;AACA,kBAAkB;AAClB","sourcesContent":["/* 1. Use a more-intuitive box-sizing model. */\n*,*::before, *::after {\nbox-sizing: border-box;}\n/* 2. Remove default margin */\n* {\nmargin: 0;\n}\n\n/* Typographic tweaks! */\n/* 3. Add accessible line-height */\n/* 4. Improve text rendering */\nbody {\nline-height: 1.5;\n-webkit-font-smoothing: antialiased;\n}\n\n/* 5. Improve media defaults */\nimg, picture, video, canvas, svg {\ndisplay: block;\nmax-width: 100%;\n}\n\n/* 6. Remove built-in form typography styles */\ninput, button, textarea, select {\nfont: inherit;\n}\n\n/* 7. Avoid text overflows */\np, h1, h2, h3, h4, h5, h6 {\noverflow-wrap: break-word;\n}\n\n/* 8. Create a root stacking context */\n#root, #next {\nisolation: isolate;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/index/index.css":
/*!************************************!*\
  !*** ./src/assets/index/index.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/index/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/assets/index/reset.css":
/*!************************************!*\
  !*** ./src/assets/index/reset.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/index/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!***********************************!*\
  !*** ./src/assets/index/index.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/assets/index/index.css");
/* harmony import */ var _reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset.css */ "./src/assets/index/reset.css");
/* harmony import */ var _DOMMethods_DOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOMMethods/DOM */ "./src/assets/index/DOMMethods/DOM.js");
/* harmony import */ var _DOMMethods_player1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOMMethods/player1 */ "./src/assets/index/DOMMethods/player1.js");
/* harmony import */ var _DOMMethods_player2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DOMMethods/player2 */ "./src/assets/index/DOMMethods/player2.js");





const gameController = function () {
  (0,_DOMMethods_DOM__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_DOMMethods_player1__WEBPACK_IMPORTED_MODULE_3__.changeShipOrientation)();
  (0,_DOMMethods_player1__WEBPACK_IMPORTED_MODULE_3__.selectShip)();
  // after adding ships, the match immediately begins as players attack!
  (0,_DOMMethods_player1__WEBPACK_IMPORTED_MODULE_3__.addShipToBoard)();
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ0E7QUFDcUI7QUFNWjtBQUU2QjtBQUUzRCxNQUFNZ0csY0FBYyxHQUFJLFlBQVk7RUFDbkM3SCwyREFBVSxDQUFDLENBQUM7RUFDWnNDLDBFQUFxQixDQUFDLENBQUM7RUFDdkJXLCtEQUFVLENBQUMsQ0FBQztFQUNaO0VBQ0EyQixtRUFBYyxDQUFDLENBQUM7QUFDakIsQ0FBQyxDQUFFLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXJlcG8vLi9zcmMvYXNzZXRzL2luZGV4L0RPTU1ldGhvZHMvRE9NLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG8vLi9zcmMvYXNzZXRzL2luZGV4L0RPTU1ldGhvZHMvcGxheWVyMS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvLy4vc3JjL2Fzc2V0cy9pbmRleC9ET01NZXRob2RzL3BsYXllcjIuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwby8uL3NyYy9hc3NldHMvaW5kZXgvYm9hcmRHcmlkL2dyaWQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwby8uL3NyYy9hc3NldHMvaW5kZXgvZ2FtZWJvYXJkL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvLy4vc3JjL2Fzc2V0cy9pbmRleC9wbGF5ZXIvcGxheWVyLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG8vLi9zcmMvYXNzZXRzL2luZGV4L3NoaXAvc2hpcC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvLy4vc3JjL2Fzc2V0cy9pbmRleC9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwby8uL3NyYy9hc3NldHMvaW5kZXgvcmVzZXQuY3NzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvLy4vc3JjL2Fzc2V0cy9pbmRleC9pbmRleC5jc3M/NWViMyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvLy4vc3JjL2Fzc2V0cy9pbmRleC9yZXNldC5jc3M/ODFlYiIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RlbXBsYXRlLXJlcG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG8vLi9zcmMvYXNzZXRzL2luZGV4L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5pbXBvcnQgeyBhZGRCb2FyZDFHcmlkcywgYWRkQm9hcmQyR3JpZHMgfSBmcm9tICcuLi9ib2FyZEdyaWQvZ3JpZCc7XG5cbmNvbnN0IGNyZWF0ZVBhZ2UgPSBmdW5jdGlvbiAoKSB7XG5cdGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cblx0Y29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcblx0Y29uc3QgYm9hcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0Ym9hcmREaXYuY2xhc3NMaXN0LmFkZCgnYm9hcmREaXYnKTtcblxuXHQvLyBjcmVhdGUgMiBib2FyZHMsIDEgc2hpcCBkaXYgJiAgMSB0ZXh0IGxpbmVcblx0Y29uc3Qgc2hpcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRzaGlwRGl2LmNsYXNzTGlzdC5hZGQoJ3NoaXBEaXYnKTtcblx0Y29uc3Qgb3JpZW50YXRpb25CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0b3JpZW50YXRpb25CdG4uY2xhc3NMaXN0LmFkZCgnb3JpZW50YXRpb25CdG4nKTtcblx0b3JpZW50YXRpb25CdG4udGV4dENvbnRlbnQgPSAnSG9yaXpvbnRhbCc7XG5cdGNvbnN0IHNoaXBBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdHNoaXBBcmVhLmNsYXNzTGlzdC5hZGQoJ3NoaXBBcmVhJyk7XG5cblx0Y29uc3QgY2FycmllclNoaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdGNhcnJpZXJTaGlwLnRleHRDb250ZW50ID0gJ0NhcnJpZXInO1xuXHRjYXJyaWVyU2hpcC5jbGFzc0xpc3QuYWRkKCdjYXJyaWVyJywgJ3NoaXAnKTtcblxuXHRjb25zdCBiYXR0bGVzaGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRiYXR0bGVzaGlwLnRleHRDb250ZW50ID0gJ0JhdHRsZXNoaXAnO1xuXHRiYXR0bGVzaGlwLmNsYXNzTGlzdC5hZGQoJ2JhdHRsZXNoaXAnLCAnc2hpcCcpO1xuXG5cdGNvbnN0IGRlc3Ryb3llciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0ZGVzdHJveWVyLnRleHRDb250ZW50ID0gJ0Rlc3Ryb3llcic7XG5cdGRlc3Ryb3llci5jbGFzc0xpc3QuYWRkKCdkZXN0cm95ZXInLCAnc2hpcCcpO1xuXG5cdGNvbnN0IHN1Ym1hcmluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0c3VibWFyaW5lLnRleHRDb250ZW50ID0gJ1N1Ym1hcmluZSc7XG5cdHN1Ym1hcmluZS5jbGFzc0xpc3QuYWRkKCdzdWJtYXJpbmUnLCAnc2hpcCcpO1xuXG5cdGNvbnN0IHBhdHJvbEJvYXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdHBhdHJvbEJvYXQudGV4dENvbnRlbnQgPSAnUGF0cm9sIEJvYXQnO1xuXHRwYXRyb2xCb2F0LmNsYXNzTGlzdC5hZGQoJ3BhdHJvbEJvYXQnLCAnc2hpcCcpO1xuXG5cdHNoaXBBcmVhLmFwcGVuZChjYXJyaWVyU2hpcCwgYmF0dGxlc2hpcCwgZGVzdHJveWVyLCBzdWJtYXJpbmUsIHBhdHJvbEJvYXQpO1xuXG5cdGNvbnN0IHBsYXllcjFCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRwbGF5ZXIxQm9hcmQuY2xhc3NMaXN0LmFkZCgncGxheWVyMUJvYXJkJyk7XG5cdGNvbnN0IHBsYXllcjJCb2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRwbGF5ZXIyQm9hcmQuY2xhc3NMaXN0LmFkZCgncGxheWVyMkJvYXJkJyk7XG5cdGNvbnN0IHRleHRJbmRpY2F0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdHRleHRJbmRpY2F0b3IuY2xhc3NMaXN0LmFkZCgndGV4dEluZGljYXRvcicpO1xuXHR0ZXh0SW5kaWNhdG9yLnRleHRDb250ZW50ID0gJ1BsYWNlIGFsbCB5b3VyIHNoaXBzISc7XG5cblx0YWRkQm9hcmQxR3JpZHMocGxheWVyMUJvYXJkKTtcblx0YWRkQm9hcmQyR3JpZHMocGxheWVyMkJvYXJkKTtcblxuXHRoZWFkZXIuYXBwZW5kKHRleHRJbmRpY2F0b3IpO1xuXHRzaGlwRGl2LmFwcGVuZChvcmllbnRhdGlvbkJ0biwgc2hpcEFyZWEpO1xuXHRib2FyZERpdi5hcHBlbmQoc2hpcERpdiwgcGxheWVyMUJvYXJkLCBwbGF5ZXIyQm9hcmQpO1xuXHRib2R5LmFwcGVuZChoZWFkZXIsIGJvYXJkRGl2KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVBhZ2U7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuaW1wb3J0IHtcblx0Z2V0UGxheWVyMUdyaWRDb29yZGluYXRlLFxuXHRnZXRQbGF5ZXIyR3JpZENvb3JkaW5hdGUsXG5cdGdldFBsYXllcjFHcmlkSW5kZXgsXG5cdGdldEdyaWRJbmRleEZyb21Db29yZGluYXRlLFxufSBmcm9tICcuLi9ib2FyZEdyaWQvZ3JpZCc7XG5cbmltcG9ydCBjcmVhdGVQbGF5ZXIgZnJvbSAnLi4vcGxheWVyL3BsYXllcic7XG5cbmltcG9ydCB7IGdldFJhbmRvbUdyaWRWYWx1ZSwgcmFuZG9tbHlBZGRTaGlwdG9BSSB9IGZyb20gJy4vcGxheWVyMic7XG5cbmltcG9ydCBjcmVhdGVTaGlwIGZyb20gJy4uL3NoaXAvc2hpcCc7XG5cbmltcG9ydCBjcmVhdGVQYWdlIGZyb20gJy4vRE9NJztcblxubGV0IG9yaWVudGF0aW9uVmFsdWUgPSAnSG9yaXpvbnRhbCc7XG5sZXQgc2VsZWN0ZWRTaGlwID0gbnVsbDtcbmxldCBzZWxlY3RlZFNoaXBMZW5ndGggPSBudWxsO1xubGV0IHNlbGVjdGVkU2hpcE9iaiA9IG51bGw7XG5sZXQgc2hpcHNQbGFjZWRCeVBsYXllcjEgPSAwO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLW11dGFibGUtZXhwb3J0c1xubGV0IHJvdW5kQ291bnRlciA9IDE7XG5sZXQgcGxheWVyMSA9IGNyZWF0ZVBsYXllcignSHVtYW4nKTsgLy8gaG93IHRvIGxpbmsgdGhlIHBsYXllcnMgdG8gdGhlaXIgcmVzcGVjdGl2ZSBib2FyZD9cbmxldCBwbGF5ZXIyID0gY3JlYXRlUGxheWVyKCdBSScpO1xuXG5jb25zdCBjaGFuZ2VTaGlwT3JpZW50YXRpb24gPSBmdW5jdGlvbiAoKSB7XG5cdGNvbnN0IG9yaWVudGF0aW9uQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9yaWVudGF0aW9uQnRuJyk7XG5cdG9yaWVudGF0aW9uQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdGlmIChvcmllbnRhdGlvbkJ0bi50ZXh0Q29udGVudCA9PT0gJ0hvcml6b250YWwnKSB7XG5cdFx0XHRvcmllbnRhdGlvbkJ0bi50ZXh0Q29udGVudCA9ICdWZXJ0aWNhbCc7XG5cdFx0XHRvcmllbnRhdGlvblZhbHVlID0gb3JpZW50YXRpb25CdG4udGV4dENvbnRlbnQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG9yaWVudGF0aW9uQnRuLnRleHRDb250ZW50ID0gJ0hvcml6b250YWwnO1xuXHRcdFx0b3JpZW50YXRpb25WYWx1ZSA9IG9yaWVudGF0aW9uQnRuLnRleHRDb250ZW50O1xuXHRcdH1cblx0fSk7XG59O1xuXG5jb25zdCBnZXRTZWxlY3RlZFNoaXBMZW5ndGggPSBmdW5jdGlvbiAoKSB7XG5cdGlmIChzZWxlY3RlZFNoaXAgPT09ICdDYXJyaWVyJykge1xuXHRcdHNlbGVjdGVkU2hpcExlbmd0aCA9IDU7XG5cdH0gZWxzZSBpZiAoc2VsZWN0ZWRTaGlwID09PSAnQmF0dGxlc2hpcCcpIHtcblx0XHRzZWxlY3RlZFNoaXBMZW5ndGggPSA0O1xuXHR9IGVsc2UgaWYgKHNlbGVjdGVkU2hpcCA9PT0gJ0Rlc3Ryb3llcicgfHwgc2VsZWN0ZWRTaGlwID09PSAnU3VibWFyaW5lJykge1xuXHRcdHNlbGVjdGVkU2hpcExlbmd0aCA9IDM7XG5cdH0gZWxzZSB7XG5cdFx0c2VsZWN0ZWRTaGlwTGVuZ3RoID0gMjtcblx0fVxuXHRyZXR1cm4gc2VsZWN0ZWRTaGlwTGVuZ3RoO1xufTtcblxuY29uc3Qgc2VsZWN0U2hpcEhhbmRsZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcblx0Y29uc3Qgc2hpcExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcCcpO1xuXHRzaGlwTGlzdC5mb3JFYWNoKChzKSA9PiBzLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJykpO1xuXHRldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcblx0c2VsZWN0ZWRTaGlwID0gZXZlbnQudGFyZ2V0LnRleHRDb250ZW50O1xuXHRzZWxlY3RlZFNoaXBMZW5ndGggPSBnZXRTZWxlY3RlZFNoaXBMZW5ndGgoc2VsZWN0ZWRTaGlwKTtcblx0c2VsZWN0ZWRTaGlwT2JqID0gY3JlYXRlU2hpcChzZWxlY3RlZFNoaXBMZW5ndGgpO1xufTtcblxuY29uc3Qgc2VsZWN0U2hpcCA9IGZ1bmN0aW9uICgpIHtcblx0Y29uc3Qgc2hpcExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcCcpO1xuXHRzaGlwTGlzdC5mb3JFYWNoKChzaGlwKSA9PiB7XG5cdFx0c2hpcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNlbGVjdFNoaXBIYW5kbGVyKTtcblx0fSk7XG59O1xuXG5jb25zdCByZW1vdmVTZWxlY3RlZFNoaXAgPSBmdW5jdGlvbiAoKSB7XG5cdC8vIHJlbW92ZSBldmVudCBsaXN0ZWVuZXIgZm9yIHNlbGVjdGVkIHNoaXBcblx0Y29uc3Qgc2VsZWN0ZWRTaGlwQ2xhc3MgPSAoXG5cdFx0c2VsZWN0ZWRTaGlwLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgc2VsZWN0ZWRTaGlwLnNsaWNlKDEpXG5cdClcblx0XHQuc3BsaXQoJyAnKVxuXHRcdC5qb2luKCcnKTtcblxuXHRjb25zdCBzaGlwVW5hdmFpbGFibGVGb3JQbGFjZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcdGAuJHtzZWxlY3RlZFNoaXBDbGFzc31gXG5cdCk7XG5cdGlmIChzaGlwVW5hdmFpbGFibGVGb3JQbGFjZW1lbnQpIHtcblx0XHRzaGlwVW5hdmFpbGFibGVGb3JQbGFjZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcblx0XHRcdCdjbGljaycsXG5cdFx0XHRzZWxlY3RTaGlwSGFuZGxlclxuXHRcdCk7XG5cdFx0c2hpcFVuYXZhaWxhYmxlRm9yUGxhY2VtZW50LmNsYXNzTGlzdC5hZGQoJ3JlbW92ZWQnKTtcblx0fVxuXHRzZWxlY3RlZFNoaXAgPSBudWxsO1xufTtcblxuY29uc3QgYWRkU2hpcFRvR3JpZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAoZ3JpZCkge1xuXHRyZXR1cm4gZnVuY3Rpb24gaGFuZGxlR3JpZENsaWNrKCkge1xuXHRcdGlmIChzZWxlY3RlZFNoaXApIHtcblx0XHRcdGNvbnN0IHsgeCwgeSB9ID0gZ2V0UGxheWVyMUdyaWRDb29yZGluYXRlKGdyaWQpO1xuXHRcdFx0bGV0IGZpcnN0R3JpZEluZGV4ID0gZ2V0UGxheWVyMUdyaWRJbmRleChncmlkKTtcblx0XHRcdGNvbnN0IGZpcnN0R3JpZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcdFx0XHRgW2RhdGEtaW5kZXg9XCIke2ZpcnN0R3JpZEluZGV4fVwiXWBcblx0XHRcdCk7XG5cblx0XHRcdHBsYXllcjEub3duQm9hcmQuc2hpcFBsYWNlbWVudChcblx0XHRcdFx0b3JpZW50YXRpb25WYWx1ZSxcblx0XHRcdFx0eCxcblx0XHRcdFx0eSxcblx0XHRcdFx0c2VsZWN0ZWRTaGlwTGVuZ3RoLFxuXHRcdFx0XHRzZWxlY3RlZFNoaXBPYmpcblx0XHRcdCk7XG5cdFx0XHRpZiAocGxheWVyMS5vd25Cb2FyZC5jaGVja1NwYWNlKSB7XG5cdFx0XHRcdGlmIChvcmllbnRhdGlvblZhbHVlID09PSAnVmVydGljYWwnKSB7XG5cdFx0XHRcdFx0Zmlyc3RHcmlkRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nO1xuXHRcdFx0XHRcdGZvciAobGV0IGkgPSAxOyBpIDwgc2VsZWN0ZWRTaGlwTGVuZ3RoOyBpICs9IDEpIHtcblx0XHRcdFx0XHRcdGZpcnN0R3JpZEluZGV4ICs9IDEwO1xuXHRcdFx0XHRcdFx0Y29uc3Qgc3Vic2VxdWVudEdyaWRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHRcdFx0XHRcdFx0YFtkYXRhLWluZGV4PVwiJHtmaXJzdEdyaWRJbmRleH1cIl1gXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0c3Vic2VxdWVudEdyaWRFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbic7XG5cdFx0XHRcdFx0XHRzdWJzZXF1ZW50R3JpZEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2hpcFBsYWNlZCcpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIGlmIChvcmllbnRhdGlvblZhbHVlID09PSAnSG9yaXpvbnRhbCcpIHtcblx0XHRcdFx0XHRmaXJzdEdyaWRFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbic7XG5cdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDE7IGkgPCBzZWxlY3RlZFNoaXBMZW5ndGg7IGkgKz0gMSkge1xuXHRcdFx0XHRcdFx0Zmlyc3RHcmlkSW5kZXggKz0gMTtcblx0XHRcdFx0XHRcdGNvbnN0IHN1YnNlcXVlbnRHcmlkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XHRcdFx0XHRcdGBbZGF0YS1pbmRleD1cIiR7Zmlyc3RHcmlkSW5kZXh9XCJdYFxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHN1YnNlcXVlbnRHcmlkRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nO1xuXHRcdFx0XHRcdFx0c3Vic2VxdWVudEdyaWRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NoaXBQbGFjZWQnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gUmVtb3ZlIGV2ZW50IGxpc3RlbmVyIGFmdGVyIHNoaXAgcGxhY2VtZW50XG5cdFx0XHRcdGdyaWQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVHcmlkQ2xpY2spO1xuXHRcdFx0XHRyZW1vdmVTZWxlY3RlZFNoaXAoKTtcblx0XHRcdFx0c2hpcHNQbGFjZWRCeVBsYXllcjEgKz0gMTtcblx0XHRcdFx0aWYgKHNoaXBzUGxhY2VkQnlQbGF5ZXIxID4gNCkge1xuXHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuXHRcdFx0XHRcdGNvbnN0IHRleHRJbmRpY2F0b3IgPVxuXHRcdFx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRleHRJbmRpY2F0b3InKTtcblx0XHRcdFx0XHR0ZXh0SW5kaWNhdG9yLnRleHRDb250ZW50ID1cblx0XHRcdFx0XHRcdCdNYXRjaCBiZWdpbnMhIFBsYXllciAxIGF0dGFjayEnO1xuXHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuXHRcdFx0XHRcdHBsYXllcjFBdHRhY2socGxheWVyMSwgcGxheWVyMik7XG5cdFx0XHRcdFx0cmFuZG9tbHlBZGRTaGlwdG9BSShwbGF5ZXIyKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YWxlcnQoJ0Nob29zZSBhbm90aGVyIGdyaWQhJyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuY29uc3QgYWRkU2hpcFRvQm9hcmQgPSBmdW5jdGlvbiAoKSB7XG5cdC8vIGdldCBncmlkIGluZGV4IGZyb20gYWRkQm9hcmQxR3JpZCwgcHJvY2VzcyBpdCB3aXRoIGdldEdyaWRDb29yZGluYXRlXG5cdGNvbnN0IGdyaWRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdyaWQub25lJyk7XG5cdGdyaWRMaXN0LmZvckVhY2goKGdyaWQpID0+IHtcblx0XHRncmlkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkU2hpcFRvR3JpZEV2ZW50TGlzdGVuZXIoZ3JpZCkpO1xuXHR9KTtcbn07XG5cbmNvbnN0IHBsYXllcjFBdHRhY2sgPSBmdW5jdGlvbiAoKSB7XG5cdGNvbnN0IHBsYXllcjJHcmlkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG5cdFx0Jy5ncmlkLnNlY29uZFBsYXllcjpub3QoLm1hcmtlZCknXG5cdCk7XG5cdGNvbnN0IHBsYXllcjFBdHRhY2tGdW5jdGlvbiA9IGZ1bmN0aW9uIChldmVudCkge1xuXHRcdGNvbnN0IGdyaWQgPSBldmVudC50YXJnZXQ7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdFx0Y29uc3QgeyB4LCB5IH0gPSBnZXRQbGF5ZXIyR3JpZENvb3JkaW5hdGUoZ3JpZCk7XG5cdFx0cGxheWVyMi5vd25Cb2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuXHRcdC8vIGNvbG9yIHRoZSBncmlkIHJlZCBpZiBpdCBpcyBvY2N1cGllZCBieSBhIHNoaXBcblx0XHRpZiAoZ3JpZC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXBQbGFjZWQnKSkge1xuXHRcdFx0Z3JpZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0Z3JpZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JleSc7XG5cdFx0fVxuXHRcdGdyaWQuY2xhc3NMaXN0LmFkZCgnbWFya2VkJyk7XG5cdFx0cm91bmRDb3VudGVyICs9IDE7XG5cdFx0cGxheWVyMkdyaWRzLmZvckVhY2goKGcpID0+IHtcblx0XHRcdGcucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwbGF5ZXIxQXR0YWNrRnVuY3Rpb24pO1xuXHRcdH0pO1xuXHRcdHBsYXllcjIub3duQm9hcmQucmVwb3J0R2FtZU92ZXIoKTtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcblx0XHRwbGF5ZXJBdHRhY2tzRWFjaE90aGVyU3Vic2VxdWVudGx5KCk7XG5cdH07XG5cdGlmICghcGxheWVyMi5vd25Cb2FyZC5nYW1lT3Zlcikge1xuXHRcdHBsYXllcjJHcmlkcy5mb3JFYWNoKChncmlkKSA9PiB7XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcblx0XHRcdGdyaWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwbGF5ZXIxQXR0YWNrRnVuY3Rpb24pO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0YWxlcnQoJ1BsYXllciAxIHdpbnMhJyk7XG5cdFx0fSwgMCk7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXG5cdFx0cmVzdGFydEdhbWUoKTtcblx0fVxufTtcblxuY29uc3QgYXR0YWNrZWRHcmlkcyA9IG5ldyBTZXQoKTtcblxuY29uc3QgQUlBdHRhY2sgPSBmdW5jdGlvbiAoKSB7XG5cdC8vIGdldCByYW5kb20geCAmIHkgdmFsXG5cdGxldCB4O1xuXHRsZXQgeTtcblx0bGV0IGdyaWRJbmRleDtcblx0ZG8ge1xuXHRcdHggPSBnZXRSYW5kb21HcmlkVmFsdWUoKTtcblx0XHR5ID0gZ2V0UmFuZG9tR3JpZFZhbHVlKCk7XG5cdFx0Ly8gY2hhbmdlIHggJiB5IGNvb3JkaW5hdGUgaW50byBncmlkIGluZGV4XG5cdFx0Z3JpZEluZGV4ID0gZ2V0R3JpZEluZGV4RnJvbUNvb3JkaW5hdGUoeCwgeSk7XG5cdH0gd2hpbGUgKGF0dGFja2VkR3JpZHMuaGFzKGdyaWRJbmRleCkpO1xuXHRhdHRhY2tlZEdyaWRzLmFkZChncmlkSW5kZXgpO1xuXHRjb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaW5kZXg9XCIke2dyaWRJbmRleH1cIl1gKTtcblx0cGxheWVyMS5vd25Cb2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuXHRwbGF5ZXIxLm93bkJvYXJkLnJlcG9ydEdhbWVPdmVyKCk7XG5cdGlmICghcGxheWVyMS5vd25Cb2FyZC5nYW1lT3Zlcikge1xuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0aWYgKGdyaWQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwUGxhY2VkJykpIHtcblx0XHRcdFx0Z3JpZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGdyaWQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZXknO1xuXHRcdFx0fVxuXHRcdFx0cGxheWVyMS5vd25Cb2FyZC5yZXBvcnRHYW1lT3ZlcigpO1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWltcG9ydC1hc3NpZ25cblx0XHRcdHJvdW5kQ291bnRlciArPSAxO1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXG5cdFx0XHRwbGF5ZXJBdHRhY2tzRWFjaE90aGVyU3Vic2VxdWVudGx5KCk7XG5cdFx0fSwgNTAwKTtcblx0fSBlbHNlIHtcblx0XHRhbGVydCgnUGxheWVyIDIgd2lucyEnKVxuXHR9XG59O1xuXG5jb25zdCBwbGF5ZXJBdHRhY2tzRWFjaE90aGVyU3Vic2VxdWVudGx5ID0gZnVuY3Rpb24gKCkge1xuXHRpZiAocm91bmRDb3VudGVyICUgMiA9PT0gMSkge1xuXHRcdGNvbnN0IHRleHRJbmRpY2F0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGV4dEluZGljYXRvcicpO1xuXHRcdHRleHRJbmRpY2F0b3IudGV4dENvbnRlbnQgPSAnUGxheWVyIDEgYXR0YWNrISc7XG5cdFx0cGxheWVyMUF0dGFjaygpO1xuXHR9IGVsc2UgaWYgKHJvdW5kQ291bnRlciAlIDIgPT09IDApIHtcblx0XHRjb25zdCB0ZXh0SW5kaWNhdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRleHRJbmRpY2F0b3InKTtcblx0XHR0ZXh0SW5kaWNhdG9yLnRleHRDb250ZW50ID0gJ1BsYXllciAyIGF0dGFjayEnO1xuXHRcdEFJQXR0YWNrKCk7XG5cdH1cbn07XG5cbmNvbnN0IHJlc3RhcnRHYW1lID0gZnVuY3Rpb24gKCkge1xuXHRjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XG5cdGNvbnN0IGJvYXJkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkRGl2Jyk7XG5cdGhlYWRlci5yZW1vdmUoKTtcblx0Ym9hcmREaXYucmVtb3ZlKCk7XG5cblx0cGxheWVyMSA9IGNyZWF0ZVBsYXllcignSHVtYW4nKTtcblx0cGxheWVyMiA9IGNyZWF0ZVBsYXllcignQUknKTtcblx0b3JpZW50YXRpb25WYWx1ZSA9ICdIb3Jpem9udGFsJztcblx0c2VsZWN0ZWRTaGlwID0gbnVsbDtcblx0c2VsZWN0ZWRTaGlwTGVuZ3RoID0gbnVsbDtcblx0c2VsZWN0ZWRTaGlwT2JqID0gbnVsbDtcblx0c2hpcHNQbGFjZWRCeVBsYXllcjEgPSAwO1xuXHRyb3VuZENvdW50ZXIgPSAxO1xuXG5cdGNyZWF0ZVBhZ2UoKTtcblx0Y2hhbmdlU2hpcE9yaWVudGF0aW9uKCk7XG5cdHNlbGVjdFNoaXAoKTtcblx0YWRkU2hpcFRvQm9hcmQoKTtcbn07XG5leHBvcnQge1xuXHRjaGFuZ2VTaGlwT3JpZW50YXRpb24sXG5cdHBsYXllcjFBdHRhY2ssXG5cdHNlbGVjdFNoaXAsXG5cdGFkZFNoaXBUb0JvYXJkLFxuXHRnZXRTZWxlY3RlZFNoaXBMZW5ndGgsXG5cdC8vIHJlc3RhcnRHYW1lLFxufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5pbXBvcnQgeyBnZXRHcmlkSW5kZXhGcm9tQ29vcmRpbmF0ZSB9IGZyb20gJy4uL2JvYXJkR3JpZC9ncmlkJztcblxuaW1wb3J0IGNyZWF0ZVNoaXAgZnJvbSAnLi4vc2hpcC9zaGlwJztcblxuLy8gZ2V0IGEgcmFuZG9tIHZhbHVlIGZyb20gMCB0byA5IGZvciBncmlkIGluZGV4XG5jb25zdCBnZXRSYW5kb21HcmlkVmFsdWUgPSBmdW5jdGlvbiAoKSB7XG5cdGNvbnN0IHJhbmRvbVZhbHVlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXHRyZXR1cm4gcmFuZG9tVmFsdWU7XG59O1xuXG4vLyByYW5kb21seSBnZXQgYW4gb3JpZW50YXRpb246IGhvcml6b250YWwgb3IgdmVydGljYWxcbmNvbnN0IGdldFJhbmRvbU9yaWVudGF0aW9uVmFsdWUgPSBmdW5jdGlvbiAoKSB7XG5cdGNvbnN0IHJhbmRvbVZhbHVlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG5cdHJldHVybiByYW5kb21WYWx1ZTtcbn07XG5cbmNvbnN0IHJhbmRvbWx5QWRkU2hpcHRvQUkgPSBmdW5jdGlvbiAoQUlwbGF5ZXIpIHtcblx0Y29uc3QgbGlzdE9mU2hpcE9iaiA9IFtcblx0XHRjcmVhdGVTaGlwKDUpLFxuXHRcdGNyZWF0ZVNoaXAoNCksXG5cdFx0Y3JlYXRlU2hpcCgzKSxcblx0XHRjcmVhdGVTaGlwKDMpLFxuXHRcdGNyZWF0ZVNoaXAoMiksXG5cdF07XG5cdGNvbnN0IG9yaWVudGF0aW9uTGlzdCA9IFsnSG9yaXpvbnRhbCcsICdWZXJ0aWNhbCddO1xuXG5cdC8vIHVzaW5nIGdldFJhbmRvbUdyaWRWYWx1ZSwgYWNjZXNzIHRoZSBncmlkcy4gQ29udGludWUgZmluZGluZyB1bnRpbFxuXHQvLyB3ZSBmaW5kIGEgZ3JpZCB0aGF0IGhhcyBlbnVmIHNwYWNlIGZvciB0aGUgZW50aXJlIHNoaXAgYW5kIGlzIG5vdCBhbGxkXG5cdC8vIG9jY3VwaWVkXG5cdGxldCB4O1xuXHRsZXQgeTtcblx0bGV0IG9yaWVudGF0aW9uO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RPZlNoaXBPYmoubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRjb25zdCBzaGlwT2JqID0gbGlzdE9mU2hpcE9ialtpXTtcblx0XHQvLyBjb250aW51ZSBmaW5kaW5nIHRoZSBncmlkIGFzIGxvbmcgYXMgZ3JpZCBzZWxlY3RlZCBpcyBub3QgYXZhaWxhYmxlXG5cdFx0ZG8ge1xuXHRcdFx0eCA9IGdldFJhbmRvbUdyaWRWYWx1ZSgpO1xuXHRcdFx0eSA9IGdldFJhbmRvbUdyaWRWYWx1ZSgpO1xuXHRcdFx0b3JpZW50YXRpb24gPSBvcmllbnRhdGlvbkxpc3RbZ2V0UmFuZG9tT3JpZW50YXRpb25WYWx1ZSgpXTtcblx0XHRcdC8vIGdldCB0aGUgZ3JpZCBhbmQgY2hlY2sgd2hldGhlciBpdCBoYXMgZW51ZiBzcGFjZVxuXHRcdFx0QUlwbGF5ZXIub3duQm9hcmQuc2hpcFBsYWNlbWVudChcblx0XHRcdFx0b3JpZW50YXRpb24sXG5cdFx0XHRcdHgsXG5cdFx0XHRcdHksXG5cdFx0XHRcdHNoaXBPYmoubGVuZ3RoLFxuXHRcdFx0XHRzaGlwT2JqXG5cdFx0XHQpO1xuXHRcdH0gd2hpbGUgKCFBSXBsYXllci5vd25Cb2FyZC5jaGVja1NwYWNlKTtcblxuXHRcdC8vIGNoYW5nZSB4ICYgeSB0byBpbmRleCBhbmQgYWRkIHRoZW0gdG8gRE9NIGluIHRoZSBib2FyZFxuXHRcdGNvbnN0IGdyaWRJbmRleCA9IHkgKiAxMCArIHg7XG5cdFx0Ly8gaXRlcmF0ZSBvdmVyIHRoZSBzaGlwIGxlbmd0aFxuXHRcdGlmIChvcmllbnRhdGlvbiA9PT0gJ0hvcml6b250YWwnKSB7XG5cdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IHNoaXBPYmoubGVuZ3RoOyBqICs9IDEpIHtcblx0XHRcdFx0Y29uc3QgZ3JpZFRvUGxhY2VTaGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHRcdFx0XHRgW2RhdGEtZ3JpZC1udW09XCIke2dyaWRJbmRleCArIGp9XCJdYFxuXHRcdFx0XHQpO1xuXHRcdFx0XHRncmlkVG9QbGFjZVNoaXAuY2xhc3NMaXN0LmFkZCgnc2hpcFBsYWNlZCcpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IHNoaXBPYmoubGVuZ3RoOyBqICs9IDEpIHtcblx0XHRcdFx0Y29uc3QgZ3JpZFRvUGxhY2VTaGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHRcdFx0XHRgW2RhdGEtZ3JpZC1udW09XCIke2dyaWRJbmRleCArIGogKiAxMH1cIl1gXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGdyaWRUb1BsYWNlU2hpcC5jbGFzc0xpc3QuYWRkKCdzaGlwUGxhY2VkJyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuXG5leHBvcnQgeyByYW5kb21seUFkZFNoaXB0b0FJLCBnZXRSYW5kb21HcmlkVmFsdWUgfTtcbiIsImNvbnN0IGdldFBsYXllcjFHcmlkSW5kZXggPSBmdW5jdGlvbiAoZ3JpZCkge1xuXHRjb25zdCBncmlkSW5kZXggPSBNYXRoLmZsb29yKGdyaWQuZGF0YXNldC5pbmRleCk7XG5cdHJldHVybiBncmlkSW5kZXg7XG59O1xuXG5jb25zdCBnZXRQbGF5ZXIxR3JpZENvb3JkaW5hdGUgPSBmdW5jdGlvbiAoZ3JpZCkge1xuXHRjb25zdCBncmlkSW5kZXggPSBncmlkLmRhdGFzZXQuaW5kZXg7XG5cdGNvbnN0IHggPSBncmlkSW5kZXggJSAxMDtcblx0Y29uc3QgeSA9IE1hdGguZmxvb3IoZ3JpZEluZGV4IC8gMTApO1xuXHRyZXR1cm4geyB4LCB5IH07XG59O1xuXG5jb25zdCBnZXRQbGF5ZXIyR3JpZENvb3JkaW5hdGUgPSBmdW5jdGlvbiAoZ3JpZCkge1xuXHRjb25zdCBncmlkSW5kZXggPSBncmlkLmRhdGFzZXQuZ3JpZE51bTtcblx0Y29uc3QgeCA9IGdyaWRJbmRleCAlIDEwO1xuXHRjb25zdCB5ID0gTWF0aC5mbG9vcihncmlkSW5kZXggLyAxMCk7XG5cdHJldHVybiB7IHgsIHkgfTtcbn07XG5cbmNvbnN0IGdldEdyaWRJbmRleEZyb21Db29yZGluYXRlID0gZnVuY3Rpb24gKHgsIHkpIHtcblx0Y29uc3QgZ3JpZEluZGV4ID0geSAqIDEwICsgeDtcblx0cmV0dXJuIGdyaWRJbmRleDtcbn07XG5cbi8vIGNyZWF0ZSBhIGZ1bmN0aW9uIHRoYXQgZ2VuZXJhdGVzIDEwMCBncmlkcyBpbiBlYWNoIGJvYXJkXG5jb25zdCBhZGRCb2FyZDJHcmlkcyA9IGZ1bmN0aW9uIChwbGF5ZXJCb2FyZCkge1xuXHQvLyBjb25zdCBncmlkTGlzdCA9IFtdO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSArPSAxKSB7XG5cdFx0Y29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdGdyaWQuY2xhc3NMaXN0LmFkZCgnZ3JpZCcsICdzZWNvbmRQbGF5ZXInLCBgJHtpfWApO1xuXHRcdGdyaWQuZGF0YXNldC5ncmlkTnVtID0gaTsgLy8gQ2hhbmdlIGRhdGFzZXQgYXR0cmlidXRlIHRvIGdyaWROdW1cblx0XHQvLyBtYXJrT3V0R3JpZChncmlkLCBpKTtcblx0XHRwbGF5ZXJCb2FyZC5hcHBlbmQoZ3JpZCk7XG5cdH1cbn07XG5cbmNvbnN0IGFkZEJvYXJkMUdyaWRzID0gZnVuY3Rpb24gKHBsYXllckJvYXJkKSB7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpICs9IDEpIHtcblx0XHRjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0Z3JpZC5jbGFzc0xpc3QuYWRkKCdncmlkJywgJ29uZScpO1xuXHRcdC8vIGdpdmUgZWFjaCBlbGVtZW50IGEgbmV3IGRhdGEgYXR0cmlidXRlIGNhbGxlZCBpbmRleFxuXHRcdGdyaWQuZGF0YXNldC5pbmRleCA9IGk7XG5cdFx0cGxheWVyQm9hcmQuYXBwZW5kKGdyaWQpO1xuXHR9XG59O1xuXG5leHBvcnQge1xuXHRnZXRHcmlkSW5kZXhGcm9tQ29vcmRpbmF0ZSxcblx0YWRkQm9hcmQxR3JpZHMsXG5cdGFkZEJvYXJkMkdyaWRzLFxuXHRnZXRQbGF5ZXIxR3JpZENvb3JkaW5hdGUsXG5cdGdldFBsYXllcjFHcmlkSW5kZXgsXG5cdGdldFBsYXllcjJHcmlkQ29vcmRpbmF0ZSxcbn07XG4iLCJmdW5jdGlvbiBjcmVhdGVCb2FyZCgpIHtcblx0Y29uc3QgYm9hcmRMZW5ndGggPSAxMDtcblxuXHQvLyBJbml0aWFsaXplIHRoZSBvYmplY3Qgd2l0aCBwcm9wZXJ0aWVzXG5cdGNvbnN0IGJvYXJkT2JqZWN0ID0ge1xuXHRcdGJvYXJkOiBBcnJheShib2FyZExlbmd0aClcblx0XHRcdC5maWxsKG51bGwpXG5cdFx0XHQubWFwKCgpID0+XG5cdFx0XHRcdEFycmF5KGJvYXJkTGVuZ3RoKVxuXHRcdFx0XHRcdC5maWxsKG51bGwpXG5cdFx0XHRcdFx0Lm1hcCgoKSA9PiAoeyBoaXQ6IGZhbHNlLCBzaGlwOiB1bmRlZmluZWQgfSkpXG5cdFx0XHQpLFxuXG5cdFx0bWlzc2VkQXR0YWNrOiAwLFxuXHRcdG51bU9mU2hpcFN1bms6IDAsXG5cdFx0Z2FtZU92ZXI6IGZhbHNlLFxuXHRcdGNoZWNrU3BhY2U6IHRydWUsXG5cblx0XHQvLyBNZXRob2QgZm9yIHNoaXAgcGxhY2VtZW50XG5cdFx0c2hpcFBsYWNlbWVudChvcmllbnRhdGlvbiwgeCwgeSwgbGVuZ3RoLCBzaGlwKSB7XG5cdFx0XHR0aGlzLmNoZWNrU3BhY2UgPSB0cnVlO1xuXG5cdFx0XHQvLyBDaGVjayBpZiB0aGUgZ3JpZCBoYXMgYWxyZWFkeSBiZWVuIHNlbGVjdGVkIGJ5IGFub3RoZXIgc2hpcCBvclxuXHRcdFx0Ly8gaWYgdGhlIGdyaWRzIGFyZSBub3QgZW5vdWdoIHRvIGZpdCB0aGUgZW50aXJlIHNoaXBcblx0XHRcdGlmIChvcmllbnRhdGlvbiA9PT0gJ0hvcml6b250YWwnKSB7XG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcblx0XHRcdFx0XHRpZiAoeCArIGkgPiA5IHx8IHRoaXMuYm9hcmRbeCArIGldW3ldLnNoaXAgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0dGhpcy5jaGVja1NwYWNlID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgbGVuZ3RoOyBqICs9IDEpIHtcblx0XHRcdFx0XHRpZiAoeSArIGogPiA5IHx8IHRoaXMuYm9hcmRbeF1beSArIGpdLnNoaXAgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0dGhpcy5jaGVja1NwYWNlID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMuY2hlY2tTcGFjZSkge1xuXHRcdFx0XHRpZiAob3JpZW50YXRpb24gPT09ICdIb3Jpem9udGFsJykge1xuXHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcblx0XHRcdFx0XHRcdHRoaXMuYm9hcmRbeCArIGldW3ldLnNoaXAgPSBzaGlwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IGxlbmd0aDsgaiArPSAxKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmJvYXJkW3hdW3kgKyBqXS5zaGlwID0gc2hpcDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0Ly8gTWV0aG9kIGZvciByZWNlaXZpbmcgYXR0YWNrXG5cdFx0cmVjZWl2ZUF0dGFjayh4LCB5KSB7XG5cdFx0XHQvLyBJZiBhdHRhY2sgbWlzc2VkLCByZWNvcmQgdGhlIGhpdCAmIG1pc3MgY291bnRlclxuXHRcdFx0aWYgKHRoaXMuYm9hcmRbeF1beV0uc2hpcCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHRoaXMuYm9hcmRbeF1beV0uaGl0ID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy5taXNzZWRBdHRhY2sgKz0gMTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgYXR0YWNrIGhpdCwgcmVjb3JkIHRoZSBoaXQgYW5kIGluY3JlYXNlIHNoaXAgaGl0IGNvdW50XG5cdFx0XHRpZiAodGhpcy5ib2FyZFt4XVt5XS5zaGlwICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhpcy5ib2FyZFt4XVt5XS5oaXQgPSB0cnVlO1xuXHRcdFx0XHR0aGlzLmJvYXJkW3hdW3ldLnNoaXAuaXNIaXQoKTtcblxuXHRcdFx0XHRpZiAodGhpcy5ib2FyZFt4XVt5XS5zaGlwLmlzU3Vuaykge1xuXHRcdFx0XHRcdC8vIEFsZXJ0IHRoYXQgdGhlIHNoaXAgaXMgc3VuayFcblx0XHRcdFx0XHR0aGlzLm51bU9mU2hpcFN1bmsgKz0gMTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvLyBNZXRob2QgZm9yIHJlcG9ydGluZyBnYW1lIG92ZXJcblx0XHRyZXBvcnRHYW1lT3ZlcigpIHtcblx0XHRcdGlmICh0aGlzLm51bU9mU2hpcFN1bmsgPT09IDUpIHtcblx0XHRcdFx0dGhpcy5nYW1lT3ZlciA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fSxcblx0fTtcblxuXHRyZXR1cm4gYm9hcmRPYmplY3Q7IC8vIFJldHVybiB0aGUgb2JqZWN0IHdpdGggcHJvcGVydGllcyBhbmQgbWV0aG9kc1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVCb2FyZDtcbiIsImltcG9ydCBjcmVhdGVCb2FyZCBmcm9tICcuLi9nYW1lYm9hcmQvZ2FtZWJvYXJkJztcblxuZnVuY3Rpb24gY3JlYXRlUGxheWVyKHR5cGUpIHtcblx0cmV0dXJuIHtcblx0XHR0eXBlLFxuXHRcdG93bkJvYXJkOiBjcmVhdGVCb2FyZCgpLFxuXHR9O1xuXHQvLyBpZiBpdCdzIEFJLCBpdCBoYXMgaXRzIG93biBwcm9wZXJ0aWVzIGxpa2Ugb3duIHNoaXAgcGxhY2VtZW50IGFuZCBhdHRhY2tzXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVBsYXllcjtcbiIsIi8vIGZhY3RvcnkgZnVuY3Rpb24gZm9yIGNyZWF0ZVNoaXAgc2hvdWxkIGhhdmUgc2hpcCBsZW5ndGgsIGhpdCBjb3VudCxcbi8vIHN1bmsgc3RhdHVzXG5cbmZ1bmN0aW9uIGNyZWF0ZVNoaXAobGVuZ3RoKSB7XG5cdHJldHVybiB7XG5cdFx0bGVuZ3RoLFxuXHRcdGlzU3VuazogZmFsc2UsXG5cdFx0aGl0U3RhdDogMCxcblx0XHRpc0hpdCgpIHtcblx0XHRcdHRoaXMuaGl0U3RhdCArPSAxO1xuXHRcdFx0aWYgKHRoaXMuaGl0U3RhdCA9PT0gdGhpcy5sZW5ndGgpIHtcblx0XHRcdFx0dGhpcy5pc1N1bmsgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH0sXG5cdH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVNoaXA7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keXtcblx0aGVpZ2h0OiAxMDB2aDtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDIyLCAyMiwgNzUpO1xufVxuXG4uaGVhZGVye1xuXHRmbGV4OiAxO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Zm9udC1zaXplOiAxLjVyZW07XG5cdGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJvYXJkRGl2e1xuXHRmbGV4OiA0O1xuXHRoZWlnaHQ6IDEwMCU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGdhcDogMTAwcHg7XG5cdHBhZGRpbmctcmlnaHQ6IDQwcHg7XG5cdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zaGlwRGl2e1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDE1cHg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5vcmllbnRhdGlvbkJ0bntcblx0YXBwZWFyYW5jZTogbm9uZTtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcblx0YmFja2dyb3VuZC1jb2xvcjogcmVkO1xuXHRjb2xvcjogd2hpdGU7XG5cdGZvbnQtd2VpZ2h0OiA4MDA7XG5cdHdpZHRoOiA5MHB4O1xufVxuLnNoaXBBcmVhe1xuXHRoZWlnaHQ6IDM1MHB4O1xuXHR3aWR0aDogMjAwcHg7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYigzOSwgMzksIDEzNik7XG5cdGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Zm9udC1zaXplOiAxLjJyZW07XG5cdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRnYXA6IDQwcHg7XG59XG5cbi5zaGlwOmhvdmVye1xuXHR0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XG5cbn1cblxuLnNlbGVjdGVke1xuXHR0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XG59XG5cbi5yZW1vdmVke1xuXHR0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cblxuLnBsYXllcjFCb2FyZCwgLnBsYXllcjJCb2FyZHtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC10ZW1wbGF0ZTogcmVwZWF0KDEwLDMwcHgpLyByZXBlYXQoMTAsMzBweCk7XG59XG5cbi5ncmlke1xuXHRoZWlnaHQ6MzBweDtcblx0d2lkdGg6IDMwcHg7XG5cdGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuXHRmb250LXNpemU6IDMwcHg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRjb2xvcjogd2hpdGU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL2luZGV4L2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLGFBQWE7Q0FDYixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLGlDQUFpQztBQUNsQzs7QUFFQTtDQUNDLE9BQU87Q0FDUCxhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQixpQkFBaUI7Q0FDakIsWUFBWTtBQUNiOztBQUVBO0NBQ0MsT0FBTztDQUNQLFlBQVk7Q0FDWixhQUFhO0NBQ2IsVUFBVTtDQUNWLG1CQUFtQjtDQUNuQix5QkFBeUI7Q0FDekIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixTQUFTO0NBQ1QsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtDQUNuQixxQkFBcUI7Q0FDckIsWUFBWTtDQUNaLGdCQUFnQjtDQUNoQixXQUFXO0FBQ1o7QUFDQTtDQUNDLGFBQWE7Q0FDYixZQUFZO0NBQ1osa0NBQWtDO0NBQ2xDLHVCQUF1QjtDQUN2QixrQkFBa0I7Q0FDbEIsWUFBWTtDQUNaLGlCQUFpQjtDQUNqQixnQkFBZ0I7Q0FDaEIsYUFBYTtDQUNiLHNCQUFzQjtDQUN0Qix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLFNBQVM7QUFDVjs7QUFFQTtDQUNDLHFCQUFxQjs7QUFFdEI7O0FBRUE7Q0FDQyxxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyw2QkFBNkI7QUFDOUI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsK0NBQStDO0FBQ2hEOztBQUVBO0NBQ0MsV0FBVztDQUNYLFdBQVc7Q0FDWCx1QkFBdUI7Q0FDdkIsZUFBZTtDQUNmLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLFlBQVk7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5e1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigyMiwgMjIsIDc1KTtcXG59XFxuXFxuLmhlYWRlcntcXG5cXHRmbGV4OiAxO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXHRjb2xvcjogd2hpdGU7XFxufVxcblxcbi5ib2FyZERpdntcXG5cXHRmbGV4OiA0O1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGdhcDogMTAwcHg7XFxuXFx0cGFkZGluZy1yaWdodDogNDBweDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zaGlwRGl2e1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDE1cHg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm9yaWVudGF0aW9uQnRue1xcblxcdGFwcGVhcmFuY2U6IG5vbmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdGZvbnQtd2VpZ2h0OiA4MDA7XFxuXFx0d2lkdGg6IDkwcHg7XFxufVxcbi5zaGlwQXJlYXtcXG5cXHRoZWlnaHQ6IDM1MHB4O1xcblxcdHdpZHRoOiAyMDBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzksIDM5LCAxMzYpO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0Zm9udC1zaXplOiAxLjJyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDQwcHg7XFxufVxcblxcbi5zaGlwOmhvdmVye1xcblxcdHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXG5cXG59XFxuXFxuLnNlbGVjdGVke1xcblxcdHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXG59XFxuXFxuLnJlbW92ZWR7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5wbGF5ZXIxQm9hcmQsIC5wbGF5ZXIyQm9hcmR7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlOiByZXBlYXQoMTAsMzBweCkvIHJlcGVhdCgxMCwzMHB4KTtcXG59XFxuXFxuLmdyaWR7XFxuXFx0aGVpZ2h0OjMwcHg7XFxuXFx0d2lkdGg6IDMwcHg7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuXFx0Zm9udC1zaXplOiAzMHB4O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRjb2xvcjogd2hpdGU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogMS4gVXNlIGEgbW9yZS1pbnR1aXRpdmUgYm94LXNpemluZyBtb2RlbC4gKi9cbiosKjo6YmVmb3JlLCAqOjphZnRlciB7XG5ib3gtc2l6aW5nOiBib3JkZXItYm94O31cbi8qIDIuIFJlbW92ZSBkZWZhdWx0IG1hcmdpbiAqL1xuKiB7XG5tYXJnaW46IDA7XG59XG5cbi8qIFR5cG9ncmFwaGljIHR3ZWFrcyEgKi9cbi8qIDMuIEFkZCBhY2Nlc3NpYmxlIGxpbmUtaGVpZ2h0ICovXG4vKiA0LiBJbXByb3ZlIHRleHQgcmVuZGVyaW5nICovXG5ib2R5IHtcbmxpbmUtaGVpZ2h0OiAxLjU7XG4td2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuLyogNS4gSW1wcm92ZSBtZWRpYSBkZWZhdWx0cyAqL1xuaW1nLCBwaWN0dXJlLCB2aWRlbywgY2FudmFzLCBzdmcge1xuZGlzcGxheTogYmxvY2s7XG5tYXgtd2lkdGg6IDEwMCU7XG59XG5cbi8qIDYuIFJlbW92ZSBidWlsdC1pbiBmb3JtIHR5cG9ncmFwaHkgc3R5bGVzICovXG5pbnB1dCwgYnV0dG9uLCB0ZXh0YXJlYSwgc2VsZWN0IHtcbmZvbnQ6IGluaGVyaXQ7XG59XG5cbi8qIDcuIEF2b2lkIHRleHQgb3ZlcmZsb3dzICovXG5wLCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcbm92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi8qIDguIENyZWF0ZSBhIHJvb3Qgc3RhY2tpbmcgY29udGV4dCAqL1xuI3Jvb3QsICNuZXh0IHtcbmlzb2xhdGlvbjogaXNvbGF0ZTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvaW5kZXgvcmVzZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDhDQUE4QztBQUM5QztBQUNBLHNCQUFzQixDQUFDO0FBQ3ZCLDZCQUE2QjtBQUM3QjtBQUNBLFNBQVM7QUFDVDs7QUFFQSx3QkFBd0I7QUFDeEIsa0NBQWtDO0FBQ2xDLDhCQUE4QjtBQUM5QjtBQUNBLGdCQUFnQjtBQUNoQixtQ0FBbUM7QUFDbkM7O0FBRUEsOEJBQThCO0FBQzlCO0FBQ0EsY0FBYztBQUNkLGVBQWU7QUFDZjs7QUFFQSw4Q0FBOEM7QUFDOUM7QUFDQSxhQUFhO0FBQ2I7O0FBRUEsNEJBQTRCO0FBQzVCO0FBQ0EseUJBQXlCO0FBQ3pCOztBQUVBLHNDQUFzQztBQUN0QztBQUNBLGtCQUFrQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiAxLiBVc2UgYSBtb3JlLWludHVpdGl2ZSBib3gtc2l6aW5nIG1vZGVsLiAqL1xcbiosKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuYm94LXNpemluZzogYm9yZGVyLWJveDt9XFxuLyogMi4gUmVtb3ZlIGRlZmF1bHQgbWFyZ2luICovXFxuKiB7XFxubWFyZ2luOiAwO1xcbn1cXG5cXG4vKiBUeXBvZ3JhcGhpYyB0d2Vha3MhICovXFxuLyogMy4gQWRkIGFjY2Vzc2libGUgbGluZS1oZWlnaHQgKi9cXG4vKiA0LiBJbXByb3ZlIHRleHQgcmVuZGVyaW5nICovXFxuYm9keSB7XFxubGluZS1oZWlnaHQ6IDEuNTtcXG4td2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG59XFxuXFxuLyogNS4gSW1wcm92ZSBtZWRpYSBkZWZhdWx0cyAqL1xcbmltZywgcGljdHVyZSwgdmlkZW8sIGNhbnZhcywgc3ZnIHtcXG5kaXNwbGF5OiBibG9jaztcXG5tYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qIDYuIFJlbW92ZSBidWlsdC1pbiBmb3JtIHR5cG9ncmFwaHkgc3R5bGVzICovXFxuaW5wdXQsIGJ1dHRvbiwgdGV4dGFyZWEsIHNlbGVjdCB7XFxuZm9udDogaW5oZXJpdDtcXG59XFxuXFxuLyogNy4gQXZvaWQgdGV4dCBvdmVyZmxvd3MgKi9cXG5wLCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcXG5vdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4vKiA4LiBDcmVhdGUgYSByb290IHN0YWNraW5nIGNvbnRleHQgKi9cXG4jcm9vdCwgI25leHQge1xcbmlzb2xhdGlvbjogaXNvbGF0ZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5pbXBvcnQgJy4vcmVzZXQuY3NzJztcbmltcG9ydCBjcmVhdGVQYWdlIGZyb20gJy4vRE9NTWV0aG9kcy9ET00nO1xuaW1wb3J0IHtcblx0Y2hhbmdlU2hpcE9yaWVudGF0aW9uLFxuXHRzZWxlY3RTaGlwLFxuXHRhZGRTaGlwVG9Cb2FyZCxcblx0Ly8gcmVzdGFydEdhbWVcbn0gZnJvbSAnLi9ET01NZXRob2RzL3BsYXllcjEnO1xuXG5pbXBvcnQgeyByYW5kb21seUFkZFNoaXB0b0FJIH0gZnJvbSAnLi9ET01NZXRob2RzL3BsYXllcjInO1xuXG5jb25zdCBnYW1lQ29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XG5cdGNyZWF0ZVBhZ2UoKTtcblx0Y2hhbmdlU2hpcE9yaWVudGF0aW9uKCk7XG5cdHNlbGVjdFNoaXAoKTtcblx0Ly8gYWZ0ZXIgYWRkaW5nIHNoaXBzLCB0aGUgbWF0Y2ggaW1tZWRpYXRlbHkgYmVnaW5zIGFzIHBsYXllcnMgYXR0YWNrIVxuXHRhZGRTaGlwVG9Cb2FyZCgpO1xufSkoKTtcbiJdLCJuYW1lcyI6WyJhZGRCb2FyZDFHcmlkcyIsImFkZEJvYXJkMkdyaWRzIiwiY3JlYXRlUGFnZSIsImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJoZWFkZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYm9hcmREaXYiLCJzaGlwRGl2Iiwib3JpZW50YXRpb25CdG4iLCJ0ZXh0Q29udGVudCIsInNoaXBBcmVhIiwiY2FycmllclNoaXAiLCJiYXR0bGVzaGlwIiwiZGVzdHJveWVyIiwic3VibWFyaW5lIiwicGF0cm9sQm9hdCIsImFwcGVuZCIsInBsYXllcjFCb2FyZCIsInBsYXllcjJCb2FyZCIsInRleHRJbmRpY2F0b3IiLCJnZXRQbGF5ZXIxR3JpZENvb3JkaW5hdGUiLCJnZXRQbGF5ZXIyR3JpZENvb3JkaW5hdGUiLCJnZXRQbGF5ZXIxR3JpZEluZGV4IiwiZ2V0R3JpZEluZGV4RnJvbUNvb3JkaW5hdGUiLCJjcmVhdGVQbGF5ZXIiLCJnZXRSYW5kb21HcmlkVmFsdWUiLCJyYW5kb21seUFkZFNoaXB0b0FJIiwiY3JlYXRlU2hpcCIsIm9yaWVudGF0aW9uVmFsdWUiLCJzZWxlY3RlZFNoaXAiLCJzZWxlY3RlZFNoaXBMZW5ndGgiLCJzZWxlY3RlZFNoaXBPYmoiLCJzaGlwc1BsYWNlZEJ5UGxheWVyMSIsInJvdW5kQ291bnRlciIsInBsYXllcjEiLCJwbGF5ZXIyIiwiY2hhbmdlU2hpcE9yaWVudGF0aW9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImdldFNlbGVjdGVkU2hpcExlbmd0aCIsInNlbGVjdFNoaXBIYW5kbGVyIiwiZXZlbnQiLCJzaGlwTGlzdCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwicyIsInJlbW92ZSIsInRhcmdldCIsInNlbGVjdFNoaXAiLCJzaGlwIiwicmVtb3ZlU2VsZWN0ZWRTaGlwIiwic2VsZWN0ZWRTaGlwQ2xhc3MiLCJjaGFyQXQiLCJ0b0xvd2VyQ2FzZSIsInNsaWNlIiwic3BsaXQiLCJqb2luIiwic2hpcFVuYXZhaWxhYmxlRm9yUGxhY2VtZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZFNoaXBUb0dyaWRFdmVudExpc3RlbmVyIiwiZ3JpZCIsImhhbmRsZUdyaWRDbGljayIsIngiLCJ5IiwiZmlyc3RHcmlkSW5kZXgiLCJmaXJzdEdyaWRFbGVtZW50Iiwib3duQm9hcmQiLCJzaGlwUGxhY2VtZW50IiwiY2hlY2tTcGFjZSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiaSIsInN1YnNlcXVlbnRHcmlkRWxlbWVudCIsInBsYXllcjFBdHRhY2siLCJhbGVydCIsImFkZFNoaXBUb0JvYXJkIiwiZ3JpZExpc3QiLCJwbGF5ZXIyR3JpZHMiLCJwbGF5ZXIxQXR0YWNrRnVuY3Rpb24iLCJyZWNlaXZlQXR0YWNrIiwiY29udGFpbnMiLCJnIiwicmVwb3J0R2FtZU92ZXIiLCJwbGF5ZXJBdHRhY2tzRWFjaE90aGVyU3Vic2VxdWVudGx5IiwiZ2FtZU92ZXIiLCJzZXRUaW1lb3V0IiwicmVzdGFydEdhbWUiLCJhdHRhY2tlZEdyaWRzIiwiU2V0IiwiQUlBdHRhY2siLCJncmlkSW5kZXgiLCJoYXMiLCJyYW5kb21WYWx1ZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImdldFJhbmRvbU9yaWVudGF0aW9uVmFsdWUiLCJBSXBsYXllciIsImxpc3RPZlNoaXBPYmoiLCJvcmllbnRhdGlvbkxpc3QiLCJvcmllbnRhdGlvbiIsImxlbmd0aCIsInNoaXBPYmoiLCJqIiwiZ3JpZFRvUGxhY2VTaGlwIiwiZGF0YXNldCIsImluZGV4IiwiZ3JpZE51bSIsInBsYXllckJvYXJkIiwiY3JlYXRlQm9hcmQiLCJib2FyZExlbmd0aCIsImJvYXJkT2JqZWN0IiwiYm9hcmQiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJoaXQiLCJ1bmRlZmluZWQiLCJtaXNzZWRBdHRhY2siLCJudW1PZlNoaXBTdW5rIiwiaXNIaXQiLCJpc1N1bmsiLCJ0eXBlIiwiaGl0U3RhdCIsImdhbWVDb250cm9sbGVyIl0sInNvdXJjZVJvb3QiOiIifQ==