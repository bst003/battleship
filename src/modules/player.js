import { Gameboard } from "./gameboard";
/*

How do I communicate that one player attacked another?
    From the player level that is, receiveAttack handles it on a board level
    Something with communicating via the ID (array position)

Need to have method to calculate random and VALID moves
    1. Have a method that takes in coordinates
    2. pubsub to get those coordinates to board
        - How do I target specific board with pubsub?
        - Refactor _validAttackCoords to take in {data} argument
          and if has certain attribute resend info back?
    3. If value send back is not valid then run it again.
    4. If attribute is valid then pubsub receiveAttack to that board

***Set player mode for computer?
    ***Have boolean to indicate if player is bot or not

How do I switch between players after attack?
    May have to wait until Gameloop is made to do that
    Gameloop holds array of players?

HOW DO I ACCESS OTHER PLAYER?

*/
export const Player = (id, getPlayersFunc = () => null, botMode = false) => {
    const _isPlayerBot = botMode;

    const _playerBoard = Gameboard();

    const _playerID = id;

    const getAllPlayers = () => getPlayersFunc();

    const getPlayerBoard = () => _playerBoard;

    const getPlayerID = () => _playerID;

    const _genRandomCoordinates = () => {
        const x = Math.floor(Math.random() * 10);
        const y = Math.floor(Math.random() * 10);

        return [x, y];
    };

    const attack = (playerObject, coords) => {
        const board = playerObject.getPlayerBoard();

        board.receiveAttack(coords);
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
