import { Player } from "./player";
import { pubsub } from "./pubsub";

/*

How to Start game?
    Create game
    Add both players
        How to go about adding the ships?
        How to tell when to render the board?
        Need method to randomly place ships
            placeRandomShip()?
                recurisve call similar to _genComputerAttackCoords
        Once all ships are placed on a board render the board in the DOM
            loop through board and add a grid for each item.

*/

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
