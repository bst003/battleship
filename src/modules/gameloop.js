import { Player } from "./player";

export const Gameloop = () => {
    const _players = [];

    const getPlayers = () => _players;

    const addPlayer = (botMode = false) => {
        const id = _players.length;

        let activePlayer = false;

        if (id === 0) {
            activePlayer = true;
        }

        const player = Player(id, activePlayer, getPlayers, botMode);

        _players.push(player);
    };

    const testMethod = (a, b) => a + b;

    return {
        addPlayer,
        getPlayers,
        testMethod,
    };
};
