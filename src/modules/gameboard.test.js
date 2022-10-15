import { Gameboard } from "./gameboard";

test("adds 10 + 3 to equal 13", () => {
    const testBoard = Gameboard();

    expect(testBoard.testMethod(10, 3)).toBe(13);
});

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
