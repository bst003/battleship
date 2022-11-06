import { pubsub } from "./pubsub";
import { Ship } from "./ship";

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

    // const _generateAllShipCoordinates = (startCoords, orientation, length) => {
    const _generateAllShipCoordinates = (data) => {
        const finalCoords = [];

        // console.log(data);

        finalCoords.push(data.startPos);

        for (let i = 0; i < data.length - 1; i++) {
            let coord;
            if (data.orientation === "vert") {
                coord = [Number(data.startPos[0]), Number(data.startPos[1]) + (i + 1)];
            } else {
                coord = [Number(data.startPos[0]) + (i + 1), Number(data.startPos[1])];
            }
            finalCoords.push(coord);
        }

        return finalCoords;
    };
    pubsub.subscribe("getFinalShipCoords", _generateAllShipCoordinates);

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
    pubsub.subscribe("checkForValidCoords", _validPlaceCoords);

    // startCoords take an array with an x and y value
    // values for orientation are 'vert' or 'hori'
    const placeShip = (startPos, orientation, length) => {
        const coordsData = {
            startPos,
            orientation,
            length,
        };

        const finalCoords = _generateAllShipCoordinates(coordsData);

        if (!_validPlaceCoords(finalCoords)) {
            // console.error("Some of the coordinates are not valid");
            return;
        }

        const ship = Ship(length, finalCoords);
        _ships.push(ship);

        _addShipToBoard(ship.getCoords());

        const data = {};

        data.id = _getBoardID();

        if (getShips().length === 1) {
            data.board = getBoard();

            pubsub.publish("renderBoard", data);
        }
        data.shipCoords = finalCoords;

        pubsub.publish("renderShip", data);
    };

    const _placeCompShip = (startPos, orientation, length) => {
        const coordsData = {
            startPos,
            orientation,
            length,
        };

        const finalCoords = _generateAllShipCoordinates(coordsData);

        if (!_validPlaceCoords(finalCoords)) {
            // console.error("Some of the random comp place coordinates are not valid");
            const randomCoords = pubsub.pull("getRandomCoordinates")[0];
            _placeCompShip(randomCoords, orientation, length);
            return;
        }

        const ship = Ship(length, finalCoords);
        _ships.push(ship);

        _addShipToBoard(ship.getCoords());

        if (getShips().length === 5) {
            // console.log("test");
            const data = {};

            data.board = getBoard();
            data.id = _getBoardID();

            pubsub.publish("renderBoard", data);
        }
    };

    // Will place all of the computer ships on the board
    const placeAllComputerShips = () => {
        const shipLengths = [5, 4, 3, 3, 2];

        for (let i = 0; i < shipLengths.length; i++) {
            const startPos = pubsub.pull("getRandomCoordinates");
            const orientation = _genRandomOrientation();

            /*
            console.log(
                `comp ship startPos: ${startPos},
                orientation: ${orientation}, length: ${shipLengths[i]} `
            );
            */

            _placeCompShip(startPos, orientation, shipLengths[i]);
        }

        // console.log(`comp ships: ${getShips().length}`);
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
        // console.log(coords);
        // console.log(hitShip);
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

        const data = {};

        data.mark = currentMark;
        data.coords = coords;
        data.id = _getBoardID();

        pubsub.publish("renderAttack", data);

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
