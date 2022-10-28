import "./assets/scss/styles.scss";

import { Gameloop } from "./modules/gameloop";
import { domFunctions } from "./modules/domStuff";
import { pubsub } from "./modules/pubsub";

console.log("test log");

const game = Gameloop();
game.addPlayer();
game.addPlayer(true);

const player1 = game.getPlayers()[0];
const player2 = game.getPlayers()[1];

const player1Board = player1.getPlayerBoard();

player1Board.placeShip([4, 4], "vert", 5);
player1Board.placeShip([0, 3], "vert", 4);
player1Board.placeShip([2, 2], "hori", 3);
player1Board.placeShip([6, 9], "hori", 3);
player1Board.placeShip([0, 0], "hori", 2);

player2.attack(player1, [9, 9]);
player2.attack(player1, [0, 0]);
player2.attack(player1, [1, 0]);
player2.attack(player1, [0, 3]);
player2.attack(player1, [0, 4]);
player2.attack(player1, [0, 5]);
player2.attack(player1, [0, 6]);

/*

CREATE SOME SORT OF SHARED METHODS AREA
    BOTH PLAYER AND GAMEBOARD USE A METHOD NAMED _genRandomCoordinates()

*/

// const testShip = Ship(4, "Destroyer");

// testShip.hit();

// console.log(testShip._getHits());

// console.log(testShip.testMethod(1, 2));
