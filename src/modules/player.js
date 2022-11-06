import { Gameboard } from "./gameboard";
import { pubsub } from "./pubsub";
// import { reusedMethods } from "./reusedMethods";

export const Player = (id, activePlayer = false, botMode = false) => {
    let _isActivePlayer = activePlayer;

    const _isPlayerBot = botMode;

    let _playerBoard;

    const createPlayerBoard = (playerID) => {
        _playerBoard = Gameboard(playerID);
    };

    const removePlayerBoard = () => {
        _playerBoard = null;
    };

    const _playerID = id;

    const getPlayerBoard = () => _playerBoard;

    const getPlayerActiveStatus = () => _isActivePlayer;

    const getPlayerBotStatus = () => _isPlayerBot;

    const getPlayerID = () => _playerID;

    const toggleActiveStatus = () => {
        _isActivePlayer = _isActivePlayer !== true;
    };

    // const _genRandomCoordinates = () => reusedMethods.genRandomCoordinates();

    const _genComputerAttackCoords = (playerObject) => {
        const randomCoords = pubsub.pull("getRandomCoordinates")[0];

        const playerBoard = playerObject.getPlayerBoard();

        if (!playerBoard.validAttackCoords(randomCoords)) {
            return _genComputerAttackCoords(playerObject);
        }

        return randomCoords;
    };

    const attack = (playerObject, coords) => {
        const board = playerObject.getPlayerBoard();

        if (!board.validAttackCoords(coords)) {
            console.error("The attack coordinates are not valid");
            return;
        }

        board.receiveAttack(coords);

        if (Number(getPlayerID()) === Number(1)) {
            console.log("this is a computer turn");

            const ships = board.getShips();

            for (let i = 0; i < ships.length; i++) {
                console.log(`${ships[i].getHits()} / ${ships[i].getLength()}`);
                console.log(ships[i].isSunk());
            }
        }

        if (board.allShipsSunk()) {
            const data = {};
            data.winner = getPlayerID();

            console.log(`game is over, winner is ${getPlayerID()}`);

            const players = pubsub.pull("domGetPlayers")[0];
            removePlayerBoard();
            players[1].removePlayerBoard();

            pubsub.publish("gameOver", data);
            return;
        }

        toggleActiveStatus();
        playerObject.toggleActiveStatus();

        // If playerObject is active and a bot
        if (playerObject.getPlayerActiveStatus() && playerObject.getPlayerBotStatus()) {
            const players = pubsub.pull("domGetPlayers")[0];
            const player1 = players[0];

            const attackCoords = _genComputerAttackCoords(player1);

            // console.log("computer is about to attack");
            playerObject.attack(player1, attackCoords);
        }
    };

    return {
        attack,
        createPlayerBoard,
        removePlayerBoard,
        getPlayerActiveStatus,
        getPlayerBotStatus,
        getPlayerBoard,
        getPlayerID,
        toggleActiveStatus,
    };
};
