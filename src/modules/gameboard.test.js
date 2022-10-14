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
