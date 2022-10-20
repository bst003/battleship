import { Gameboard } from "./gameboard";
/*

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

*/
export const Player = () => {
    const playerBoard = Gameboard();

    const testMethod = (a, b) => a + b;

    return {
        testMethod,
    };
};
