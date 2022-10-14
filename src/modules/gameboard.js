/*

placeShip will take in coordinates (Array) and orientation (vert or hori)
    Will need to call Ship factory to generate ship
        Should this be handled by another step and have the value passed in?
    Will have to pass coords to ship after placing

*/
export const Gameboard = () => {
    const _board = [
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", "", "", ""],
    ];

    const placeShip = () => {};

    const testMethod = (a, b) => a + b;

    return {
        testMethod,
    };
};
