import { Player } from "./player";

test("Test Method", () => {
    const player = Player();

    expect(player.testMethod(1, 3)).toBe(4);
});

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

test("Players attacks with invalis coords will be stopped", () => {
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
