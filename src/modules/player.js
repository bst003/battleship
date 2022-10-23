import { Gameboard } from "./gameboard";
/*

***How do I communicate that one player attacked another?
    ***From the player level that is, receiveAttack handles it on a board level
    ***Something with communicating via the ID (array position)

***Set player mode for computer?
    ***Have boolean to indicate if player is bot or not

How do I switch between players after attack?
    May have to wait until Gameloop is made to do that
    Gameloop holds array of players?

Steps on Attack
    ***If cooordinates are NOT valid
        ***return

    ***Initiate receiveAttack on board

    Check if game over has occurred

    Toggle active status on player1 (ADD THIS PROPERTY TO PLAYER)
    Toggle active status on player2

    If active player is bot then gen random coordinates and attack with those.
        Make special function to run computer move
*/
export const Player = (id, activePlayer, getPlayersFunc = () => null, botMode = false) => {
    let _isActivePlayer = activePlayer;

    const _isPlayerBot = botMode;

    const _playerBoard = Gameboard();

    const _playerID = id;

    const getAllPlayers = () => getPlayersFunc();

    const getPlayerBoard = () => _playerBoard;

    const getPlayerBotStatus = () => _isPlayerBot;

    const getPlayerID = () => _playerID;

    const _toggleActiveStatus = () => {
        _isActivePlayer = _isActivePlayer !== true;
    };

    const _genRandomCoordinates = () => {
        const x = Math.floor(Math.random() * 10);
        const y = Math.floor(Math.random() * 10);

        return [x, y];
    };

    const attack = (playerObject, coords) => {
        const board = playerObject.getPlayerBoard();

        if (!board.validAttackCoords(coords)) {
            console.error("The attack coordinates are not valid");
            return;
        }

        board.receiveAttack(coords);

        if (board.allShipsSunk()) {
            console.log("all ships are sunken, game over");
            return;
        }

        this._toggleActiveStatus();
        playerObject._toggleActiveStatus();
    };

    const testMethod = (a, b) => a + b;

    return {
        attack,
        getAllPlayers,
        getPlayerBoard,
        getPlayerID,
        testMethod,
    };
};
