import { pubsub } from "./pubsub";
import { Ship } from "./ship";
/*

The board will be visible on the front end
    Should this be private?
    Need to know where to show ships
    Markers
        use "s" in array for ship
        "h" for hit ship
        "x" for miss

placeShip will take in coordinates (Array) and orientation (vert or hori)
    Would also need to pass length
    Will need to call Ship factory to generate ship
        Should this be handled by another step and have the value passed in?
        Store Ships in an array/object in Gameboard?
    Will have to pass coords to ship after placing
    TWO STEPS, FIRST CREATE SHIP AND THEN PLACE

placeShips step by step
    ***if base coordinates are valid
        ***generate all coordinates
            if all generated coordinates are valid (_verifyCoords)
            AND NOT OCCUPIED BY OTHER SHIP!!!!
                ***create ship with length and all coordinates passed in
                ***Add marks to _board where ship is
            ***if all generated coordinates are not valid
                ***return error message
    ***if base coordinates are not valid
        ***return error message

IMPLEMENT PUBSUB WHERE POSSIBLE

receiveAttack step by step
    if base coords are valid
        if spot is empty then change spot to x
            record misses
        if spot is ship then change to h
            Add hit to ship in question
    if base coordinates are not valid
        return error message

*/
export const Gameboard = (id = 0) => {
    const _board = [
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
    ];

    const _boardID = id;

    let _missedAttacks = 0;

    const _ships = [];

    const getBoard = () => _board;

    const _getBoardID = () => _boardID;

    const getMissedAttacks = () => _missedAttacks;

    const getShips = () => _ships;

    const _genRandomCoordinates = () => {
        const x = Math.floor(Math.random() * 10);
        const y = Math.floor(Math.random() * 10);

        return [x, y];
    };

    const _genRandomOrientation = () => {
        const rand = Math.random();

        if (rand < 0.5) {
            return "vert";
        }
        return "hori";
    };

    // Check if all ships are sunken
    const allShipsSunk = () => {
        const ships = getShips();

        for (let i = 0; i < ships.length; i++) {
            const shipSunk = ships[i].isSunk();

            if (!shipSunk) {
                return false;
            }
        }

        return true;
    };

    const _addShipToBoard = (coordsArray) => {
        for (let i = 0; i < coordsArray.length; i++) {
            const posX = coordsArray[i][0];
            const posY = coordsArray[i][1];

            // posY needs to come first due to how array data is accessed
            // y value comes first in the array
            _board[posY][posX] = "s";
        }
    };

    const _generateAllShipCoordinates = (startCoords, orientation, length) => {
        const finalCoords = [];

        finalCoords.push(startCoords);

        for (let i = 0; i < length - 1; i++) {
            let coord;
            if (orientation === "vert") {
                coord = [startCoords[0], startCoords[1] + (i + 1)];
            } else {
                coord = [startCoords[0] + (i + 1), startCoords[1]];
            }
            finalCoords.push(coord);
        }

        return finalCoords;
    };

    const _validPlaceCoords = (coordsArray) => {
        let valid = true;

        for (let i = 0; i < coordsArray.length; i++) {
            const posX = coordsArray[i][0];
            const posY = coordsArray[i][1];

            if (
                _board[posX] === undefined ||
                _board[posY] === undefined ||
                _board[posY][posX] !== ""
            ) {
                valid = false;
            }
        }

        return valid;
    };

    // startCoords take an array with an x and y value
    // values for orientation are 'vert' or 'hori'
    const placeShip = (startPos, orientation, length) => {
        const finalCoords = _generateAllShipCoordinates(startPos, orientation, length);

        if (!_validPlaceCoords(finalCoords)) {
            console.error("Some of the coordinates are not valid");
            return;
        }

        const ship = Ship(length, finalCoords);
        _ships.push(ship);

        _addShipToBoard(ship.getCoords());

        console.log(getShips().length);

        if (getShips().length === 5) {
            const data = {};

            data.board = getBoard();
            data.id = _getBoardID();

            pubsub.publish("renderBoard", data);
        }
    };

    const _placeCompShip = (startPos, orientation, length) => {
        const finalCoords = _generateAllShipCoordinates(startPos, orientation, length);

        if (!_validPlaceCoords(finalCoords)) {
            console.error("Some of the random comp place coordinates are not valid");
            const randomCoords = _genRandomCoordinates();
            _placeCompShip(randomCoords, orientation, length);
            return;
        }

        const ship = Ship(length, finalCoords);
        _ships.push(ship);

        _addShipToBoard(ship.getCoords());
    };

    // Will place all of the computer ships on the board
    const placeAllComputerShips = () => {
        const shipLengths = [5, 4, 3, 3, 2];

        for (let i = 0; i < shipLengths.length; i++) {
            const startPos = _genRandomCoordinates();
            const orientation = _genRandomOrientation();
            _placeCompShip(startPos, orientation, shipLengths[i]);
        }
    };

    const _determineBoardMark = (coords) => {
        const posX = coords[0];
        const posY = coords[1];

        if (_board[posY][posX] === "" || _board[posY][posX] === "x") {
            return "x";
        }
        return "h";
    };

    const _getHitShip = (coords) => {
        let hitShip;

        const ships = getShips();

        const posX = coords[0];
        const posY = coords[1];

        for (let i = 0; i < ships.length; i++) {
            const shipCoords = ships[i].getCoords();

            if (hitShip !== undefined) {
                break;
            }

            for (let z = 0; z < shipCoords.length; z++) {
                const currentPosX = shipCoords[z][0];
                const currentPosY = shipCoords[z][1];

                if (posX === currentPosX && posY === currentPosY) {
                    hitShip = ships[i];
                    break;
                }
            }
        }

        return hitShip;
    };

    const _addHitToShip = (coords) => {
        const hitShip = _getHitShip(coords);
        hitShip.hit();
    };

    const _missedAttack = (prevMark, currentMark) => {
        if (prevMark === "s" && currentMark === "h") {
            return false;
        }
        return true;
    };

    const validAttackCoords = (coordsArray) => {
        let valid = true;

        const posX = coordsArray[0];
        const posY = coordsArray[1];

        if (
            _board[posX] === undefined ||
            _board[posY] === undefined ||
            _board[posY][posX] === "x" ||
            _board[posY][posX] === "h"
        ) {
            valid = false;
        }

        return valid;
    };

    const receiveAttack = (coords) => {
        const posX = coords[0];
        const posY = coords[1];

        const prevMark = _board[posY][posX];

        const currentMark = _determineBoardMark(coords);
        // console.log(currentMark);
        _board[posY][posX] = currentMark;

        if (_missedAttack(prevMark, currentMark)) {
            _missedAttacks++;
            return;
        }

        _addHitToShip(coords);
        // _checkForGameOver();
    };

    return {
        getBoard,
        getMissedAttacks,
        getShips,
        allShipsSunk,
        placeShip,
        placeAllComputerShips,
        receiveAttack,
        validAttackCoords,
    };
};
