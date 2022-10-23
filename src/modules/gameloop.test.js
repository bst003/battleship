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
