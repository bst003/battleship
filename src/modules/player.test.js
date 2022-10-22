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

    player1.attack(player2);

    expect(player2.getPlayerBoard().getBoard()).toEqual(expectedBoard);
});
