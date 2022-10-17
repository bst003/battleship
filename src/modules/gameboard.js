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

*/
export const Gameboard = () => {
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

    const _ships = [];

    const getBoard = () => _board;

    const getShips = () => _ships;

    const _addShipToBoard = (coordsArray) => {
        for (let i = 0; i < coordsArray.length; i++) {
            const posX = coordsArray[i][0];
            const posY = coordsArray[i][1];

            // posY needs to come first due to how array data is accessed
            // y value comes first in the array
            _board[posY][posX] = "s";
        }
    };

    const _generateAllCoordinates = (startCoords, orientation, length) => {
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

    const _verifyCoords = (coordsArray) => {
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
    const placeShip = (startPos, orientation, length) => {
        const startPosX = startPos[0];
        const startPosY = startPos[1];

        // if (_board[startPosX] === undefined && _board[startPosY] === undefined) {
        //     console.error("The initial coordinates do not exist");
        //     return;
        // }

        const finalCoords = _generateAllCoordinates(startPos, orientation, length);

        if (!_verifyCoords(finalCoords)) {
            console.error("Some of the coordinates are not valid");
            return;
        }

        const ship = Ship(length, finalCoords);
        _ships.push(ship);

        _addShipToBoard(ship.getCoords());
    };

    // const placeShip = (startPos, orientation, length) => {
    //     const startPosX = startPos[0];
    //     const startPosY = startPos[1];

    //     if (_board[startPosX] !== undefined && _board[startPosY] !== undefined) {
    //         const finalCoords = _generateAllCoordinates(startPos, orientation, length);

    //         if (_verifyCoords(finalCoords)) {
    //             const ship = Ship(length, finalCoords);
    //             _ships.push(ship);

    //             _addShipToBoard(ship.getCoords());
    //         } else {
    //             console.error("Some of the coordinates are not valid");
    //         }
    //     } else {
    //         console.error("The initial coordinates do not exist");
    //     }
    // };

    const testMethod = (a, b) => a + b;

    return {
        getBoard,
        getShips,
        placeShip,
        testMethod,
    };
};
