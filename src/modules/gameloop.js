import { Player } from "./player";

export const Gameloop = () => {
    const _players = [];

    const addPlayer = (botMode) => {
        const id = _players.length;

        const player = Player(id, botMode);

        _players.push(player);
    };

    return {
        addPlayer,
    };
};
