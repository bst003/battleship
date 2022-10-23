import { Player } from "./player";

test("Players can attack other players boards", () => {
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

test("Confirm all ships sunk runs properly on attack", () => {
    const player1 = Player(0);
    const player2 = Player(1);

    const player2Board = player2.getPlayerBoard();
    player2Board.placeShip([0, 0], "hori", 2);

    player1.attack(player2, [0, 0]);
    player1.attack(player2, [1, 0]);

    console.log(player2Board.getBoard());

    expect(player2Board.allShipsSunk()).toBe(true);
});

test("Confirm player status after being created", () => {
    const player1 = Player(0, true);

    expect(player1.getPlayerActiveStatus()).toBe(true);
});

test("Confirm attacking player status is toggle after attack", () => {
    const player1 = Player(0, true);
    const player2 = Player(1);

    const player2Board = player2.getPlayerBoard();
    player2Board.placeShip([0, 0], "hori", 2);

    player1.attack(player2, [0, 0]);

    expect(player1.getPlayerActiveStatus()).toBe(false);
});

test("Confirm attacked player status is toggle after attack", () => {
    const player1 = Player(0, true);
    const player2 = Player(1);

    const player2Board = player2.getPlayerBoard();
    player2Board.placeShip([0, 0], "hori", 2);

    player1.attack(player2, [0, 0]);

    expect(player2.getPlayerActiveStatus()).toBe(true);
});
