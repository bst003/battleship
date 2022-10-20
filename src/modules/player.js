import { Gameboard } from "./gameboard";
/*

TWO MAIN IDEAS
    1. Assigning board to a player and having it
       be an object property of the player while
       the players are stored in the Game Loop

    2. Have the Game Loop have an array to hold Players
       and another array to hold Boards. Each Player would have
       an ID that corresponds to a board. This option seems easier
       for pubsub

Need to assign a board to the player

How do I communicate that one player attacked another?
    From the player level that is, receiveAttack handles it on a board level

Need to have method to calculate random and VALID moves
    1. Have a method that takes in coordinates
    2. pubsub to get those coordinates to board
        - How do I target specific board with pubsub?
        - Refactor _validAttackCoords to take in {data} argument
          and if has certain attribute resend info back?
    3. If value send back is not valid then run it again.
    4. If attribute is valid then pubsub receiveAttack to that board

Set player mode for computer?
    mode = player for humans
    mode = computer for bots

How do I switch between players after attack?
    May have to wait until Gameloop is made to do that
    Gameloop holds array of players?

WHAT IS GAME LOOP HELD BOTH PLAYERS AND GAME BOARDS?
    Assign an ID to each player that corresponds to a game board with the same ID

*/
export const Player = () => {
    const playerBoard = Gameboard();

    const testMethod = (a, b) => a + b;

    return {
        testMethod,
    };
};
