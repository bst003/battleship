import { Player } from "./player";
import { pubsub } from "./pubsub";

export const Gameloop = (() => {
    const _players = [];

    const clearPlayers = () => {
        for (let i = 0; i <= _players.length; i++) {
            _players.shift();
        }
    };
    pubsub.subscribe("gameOver", clearPlayers);

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

        const player2 = getPlayers()[1];

        const player2Board = player2.getPlayerBoard();

        player2Board.placeAllComputerShips();

        const player1 = getPlayers()[0];

        const player1Board = player1.getPlayerBoard();

        console.log(player1Board.getBoard());
    };
    pubsub.subscribe("startGame", startGame);

    return {
        addPlayer,
        getPlayers,
        startGame,
    };
})();
