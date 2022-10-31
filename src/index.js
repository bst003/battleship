import "./assets/scss/styles.scss";

import { Gameloop } from "./modules/gameloop";
import { domFunctions } from "./modules/domStuff";
import { reusedMethods } from "./modules/reusedMethods";
import { pubsub } from "./modules/pubsub";

/*

CREATE SOME SORT OF SHARED METHODS AREA
    BOTH PLAYER AND GAMEBOARD USE A METHOD NAMED _genRandomCoordinates()

*/

const game = Gameloop();
game.addPlayer();
game.addPlayer(true);

const player1 = game.getPlayers()[0];
const player2 = game.getPlayers()[1];

window.game = game;
window.player1 = player1;
window.player2 = player2;

const player1Board = player1.getPlayerBoard();

player1Board.placeShip([4, 4], "vert", 5);
player1Board.placeShip([0, 3], "vert", 4);
player1Board.placeShip([2, 2], "hori", 3);
player1Board.placeShip([6, 9], "hori", 3);
player1Board.placeShip([0, 0], "hori", 2);

const player2Board = player2.getPlayerBoard();
player2Board.placeAllComputerShips();

player1.attack(player2, [9, 9]);

// player2.attack(player1, [9, 9]);
// player2.attack(player1, [0, 0]);
// player2.attack(player1, [1, 0]);
// player2.attack(player1, [0, 3]);
// player2.attack(player1, [0, 4]);
// player2.attack(player1, [0, 5]);
// player2.attack(player1, [0, 6]);

/*

CREATE SOME SORT OF SHARED METHODS AREA
    BOTH PLAYER AND GAMEBOARD USE A METHOD NAMED _genRandomCoordinates()

*/
