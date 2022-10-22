import { Player } from "./player";

export const Gameloop = () => {
    const _players = [];

    const getPlayers = () => _players;

    const addPlayer = (botMode = false) => {
        const id = _players.length;

        const player = Player(id, botMode);
        player.getAllPlayers = getPlayers();

        _players.push(player);
    };

    const testMethod = (a, b) => a + b;

    return {
        addPlayer,
        getPlayers,
        testMethod,
    };
};
