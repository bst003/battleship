import { Gameboard } from "./gameboard";
import { pubsub } from "./pubsub";

export const Player = (id, activePlayer = false, botMode = false) => {
    let _isActivePlayer = activePlayer;

    const _isPlayerBot = botMode;

    const _playerBoard = Gameboard(id);

    const _playerID = id;

    const getPlayerBoard = () => _playerBoard;

    const getPlayerActiveStatus = () => _isActivePlayer;

    const getPlayerBotStatus = () => _isPlayerBot;

    const getPlayerID = () => _playerID;

    const toggleActiveStatus = () => {
        _isActivePlayer = _isActivePlayer !== true;
    };

    const _genRandomCoordinates = () => {
        const x = Math.floor(Math.random() * 10);
        const y = Math.floor(Math.random() * 10);

        return [x, y];
    };

    const _genComputerAttackCoords = (playerObject) => {
        const randomCoords = _genRandomCoordinates();

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

        if (board.allShipsSunk()) {
            console.log(`all ships are sunken, game over - player ${getPlayerID()} wins`);
            // Add pubsub to show winner via DOM
            return;
        }

        toggleActiveStatus();
        playerObject.toggleActiveStatus();

        // If playerObject is active and a bot
        if (playerObject.getPlayerActiveStatus() && playerObject.getPlayerBotStatus()) {
            const players = pubsub.pull("domGetPlayers")[0];
            const player1 = players[0];

            const attackCoords = _genComputerAttackCoords(player1);

            // Create recurive method to gen/check attack coords, if invalid gen new coords

            playerObject.attack(player1, attackCoords);
        }
    };

    return {
        attack,
        getPlayerActiveStatus,
        getPlayerBotStatus,
        getPlayerBoard,
        getPlayerID,
        toggleActiveStatus,
    };
};
