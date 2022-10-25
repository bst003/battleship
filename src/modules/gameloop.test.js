import { Gameloop } from "./gameloop";

test("Individual Players can access other players", () => {
    const game = Gameloop();

    // add players
    game.addPlayer();
    game.addPlayer(true);

    // console.log(game.getPlayers());

    const player1 = game.getPlayers()[0];

    // console.log(player1.getAllPlayers());

    expect(player1.getAllPlayers().length).toBe(2);
});

test("Confirm computer attacks player after player attack", () => {
    const game = Gameloop();

    // add players
    game.addPlayer();
    game.addPlayer(true);

    const player1 = game.getPlayers()[0];
    const player2 = game.getPlayers()[1];

    const player1BoardObject = player1.getPlayerBoard();
    player1BoardObject.placeShip([0, 0], "vert", 4);

    const player1Board = player1BoardObject.getBoard();

    const player2BoardObject = player2.getPlayerBoard();
    player2BoardObject.placeShip([0, 0], "hori", 4);

    player1.attack(player2, [0, 0]);

    let player1Attacked = false;

    for (let i = 0; i < player1Board.length; i++) {
        if (player1Board[i].includes("x") || player1Board[i].includes("h")) {
            player1Attacked = true;
        }
    }

    expect(player1Attacked).toBe(true);
});
