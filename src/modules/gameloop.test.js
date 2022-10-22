import { Gameloop } from "./gameloop";

test("Ship is added to _ships array", () => {
    const game = Gameloop();

    expect(game.testMethod(1, 3)).toBe(4);
});

test.only("Individual Players can access other players", () => {
    const expectedPlayers = [];

    const game = Gameloop();

    // add players
    game.addPlayer();
    game.addPlayer(true);

    // console.log(game.getPlayers());

    const player1 = game.getPlayers()[0];

    console.log(player1.getAllPlayers);

    expect(player1.testMethod(1, 3)).toBe(4);
});
