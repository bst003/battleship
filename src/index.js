import "./assets/scss/styles.scss";
import "./assets/scss/modal.scss";

import MicroModal from "micromodal";

import { Gameloop } from "./modules/gameloop";
import { domFunctions } from "./modules/domStuff";
import { reusedMethods } from "./modules/reusedMethods";
import { pubsub } from "./modules/pubsub";

/*

TODO
    Implement drag and drop
        https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API#define_a_drop_zone
        https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_draganddrop
        --- Refactor how ships are rendered to show even if number isn't five?
            --- Have all cells have empty class at first, then update when ships is placed on them.

    Implement lightbox for dragging and dropping
    Only add event listenrs if player ID is for player 2
    Remove event listeners on game over

    Add way to clear everything and play again

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

MicroModal.init();

// pubsub.publish("testModal");

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
