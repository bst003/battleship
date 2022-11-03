import { Player } from "./player";
import { pubsub } from "./pubsub";

export const Gameloop = (() => {
    const _players = [];

    const getPlayers = () => _players;
    pubsub.subscribe("domGetPlayers", getPlayers);

    const addPlayer = (botMode = false) => {
        const id = _players.length;

        let activePlayer = false;

        if (id === 0) {
            activePlayer = true;
        }

        const player = Player(id, activePlayer, botMode);

        _players.push(player);
    };

    const startGame = () => {
        addPlayer();
        addPlayer(true);

        const player1 = getPlayers()[0];
        const player2 = getPlayers()[1];

        const player1Board = player1.getPlayerBoard();
        const player2Board = player2.getPlayerBoard();

        // player1Board.placeShip([4, 4], "vert", 5);

        player2Board.placeAllComputerShips();
    };
    pubsub.subscribe("startGame", startGame);

    return {
        addPlayer,
        getPlayers,
        startGame,
    };
})();
