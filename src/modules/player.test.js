import { Player } from "./player";

test("Test Method", () => {
    const player = Player();

    expect(player.testMethod(1, 3)).toBe(4);
});

test.only("Players can attack other players boards", () => {
    const expectedBoard = [
        ["x", "", "", "", "", "", "", "", "", ""],
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

    const player1 = Player(0);
    const player2 = Player(1);

    player1.attack(player2, [0, 0]);

    expect(player2.getPlayerBoard().getBoard()).toEqual(expectedBoard);
});

test("Players attacks with invalid coords will be stopped", () => {
    const expectedBoard = [
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

    const player1 = Player(0);
    const player2 = Player(1);

    player1.attack(player2, [10, 0]);

    expect(player2.getPlayerBoard().getBoard()).toEqual(expectedBoard);
});

test("Confirm all ships sunk runs properly", () => {
    const player1 = Player(0);
    const player2 = Player(1);

    const player2Board = player2.getPlayerBoard();
    player2Board.placeShip([0, 0], "hori", 2);

    player1.attack(player2, [0, 0]);
    player1.attack(player2, [1, 0]);

    expect(player2Board.allShipsSunk()).toBe(true);
});
