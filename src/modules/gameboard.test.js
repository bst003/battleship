import { Gameboard } from "./gameboard";

test("Ship is added to _ships array", () => {
    const testBoard = Gameboard();

    testBoard.placeShip([0, 0], "vert", 5);

    expect(testBoard.getShips().length).toBe(1);
});

test("Ship is not added to _ships array", () => {
    const testBoard = Gameboard();

    testBoard.placeShip([-1, 0], "vert", 5);

    expect(testBoard.getShips().length).toBe(0);
});

test("Ship will go from [0,0] to [0,4] - vertical", () => {
    const expectedCoords = [
        [0, 0],
        [0, 1],
        [0, 2],
        [0, 3],
        [0, 4],
    ];

    const testBoard = Gameboard();

    testBoard.placeShip([0, 0], "vert", 5);

    const ships = testBoard.getShips();
    const firstShip = ships[0];

    expect(firstShip.getCoords()).toEqual(expectedCoords);
});

test("Ship will go from [0,0] to [4,0]", () => {
    const expectedCoords = [
        [0, 0],
        [1, 0],
        [2, 0],
        [3, 0],
        [4, 0],
    ];

    const testBoard = Gameboard();

    testBoard.placeShip([0, 0], "hori", 5);

    const ships = testBoard.getShips();
    const firstShip = ships[0];

    expect(firstShip.getCoords()).toEqual(expectedCoords);
});

test("Ship will try, and fail, to go from [9,0] to [13,0]", () => {
    const testBoard = Gameboard();

    testBoard.placeShip([9, 0], "hori", 5);

    const ships = testBoard.getShips();

    expect(ships.length).toBe(0);
});

test("Add ship and update _board", () => {
    const expectedBoard = [
        ["s", "", "", "", "", "", "", "", "", ""],
        ["s", "", "", "", "", "", "", "", "", ""],
        ["s", "", "", "", "", "", "", "", "", ""],
        ["s", "", "", "", "", "", "", "", "", ""],
        ["s", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
    ];

    const testBoard = Gameboard();

    testBoard.placeShip([0, 0], "vert", 5);

    const board = testBoard.getBoard();

    expect(board).toEqual(expectedBoard);
});

test("Ensure two ships cannot occupy the same spot", () => {
    const expectedBoard = [
        ["", "", "s", "", "", "", "", "", "", ""],
        ["", "", "s", "", "", "", "", "", "", ""],
        ["", "", "s", "", "", "", "", "", "", ""],
        ["", "", "s", "", "", "", "", "", "", ""],
        ["", "", "s", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
    ];

    const testBoard = Gameboard();

    testBoard.placeShip([2, 0], "vert", 5);

    testBoard.placeShip([0, 4], "hori", 4);

    const board = testBoard.getBoard();

    expect(board).toEqual(expectedBoard);
});

test("Test that multiple ships can be placed", () => {
    const expectedBoard = [
        ["", "", "s", "", "", "", "", "", "", ""],
        ["", "", "s", "", "", "", "", "", "", ""],
        ["", "", "s", "", "", "", "", "", "", ""],
        ["", "", "s", "", "", "", "", "", "", ""],
        ["", "", "s", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["s", "s", "s", "s", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
    ];

    const testBoard = Gameboard();

    testBoard.placeShip([2, 0], "vert", 5);

    testBoard.placeShip([0, 6], "hori", 4);

    const board = testBoard.getBoard();

    expect(board).toEqual(expectedBoard);
});

test("Missed attacks are recorded properly", () => {
    const testBoard = Gameboard();

    testBoard.placeShip([2, 0], "vert", 5);

    testBoard.placeShip([0, 6], "hori", 4);

    testBoard.receiveAttack([8, 8]);

    expect(testBoard.getMissedAttacks()).toBe(Number(1));
});

test("Ensure ships are registering hits properly", () => {
    const testBoard = Gameboard();

    testBoard.placeShip([2, 0], "vert", 5);

    testBoard.placeShip([0, 6], "hori", 2);

    testBoard.receiveAttack([2, 0]);

    testBoard.receiveAttack([2, 1]);

    const ships = testBoard.getShips();

    const attackedShip = ships[0];

    expect(attackedShip.getHits()).toBe(Number(2));
});

test("Ensure board is properly marking misses", () => {
    const expectedBoard = [
        ["", "", "s", "", "", "", "", "", "", ""],
        ["", "", "s", "", "", "", "", "", "", ""],
        ["", "", "s", "", "", "", "", "", "", ""],
        ["", "", "s", "", "", "", "", "", "", ""],
        ["", "", "s", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "x", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
    ];

    const testBoard = Gameboard();

    testBoard.placeShip([2, 0], "vert", 5);

    testBoard.receiveAttack([4, 6]);

    const boardArray = testBoard.getBoard();

    expect(boardArray).toEqual(expectedBoard);
});

test("Test for game over", () => {
    const testBoard = Gameboard();

    testBoard.placeShip([2, 0], "vert", 2);

    testBoard.placeShip([0, 6], "hori", 2);

    testBoard.receiveAttack([2, 0]);
    testBoard.receiveAttack([2, 1]);
    testBoard.receiveAttack([0, 6]);
    testBoard.receiveAttack([1, 6]);

    const allShipsSunk = testBoard.allShipsSunk();

    expect(allShipsSunk).toBe(true);
});
