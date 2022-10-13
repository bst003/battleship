import { Gameboard } from "./gameboard";

test("adds 10 + 3 to equal 13", () => {
    const testBoard = Gameboard();

    expect(testBoard.testMethod(10, 3)).toBe(13);
});
