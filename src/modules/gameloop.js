import { Player } from "./player";
import { pubsub } from "./pubsub";

export const Gameloop = () => {
    const _players = [];

    const getPlayers = () => _players;

    const addPlayer = (botMode = false) => {
        const id = _players.length;

        let activePlayer = false;

        if (id === 0) {
            activePlayer = true;
        }

        const player = Player(id, activePlayer, botMode);

        _players.push(player);
    };

    pubsub.subscribe("domGetPlayers", getPlayers);

    return {
        addPlayer,
        getPlayers,
    };
};
