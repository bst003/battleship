/*

The board will be visible on the front end
    Should this be private?
    Need to know where to show ships
    Markers
        use "s" in array for ship
        "h" for hit ship
        "x" for miss

placeShip will take in coordinates (Array) and orientation (vert or hori)
    Would also need to pass length
    Will need to call Ship factory to generate ship
        Should this be handled by another step and have the value passed in?
        Store Ships in an array/object in Gameboard?
    Will have to pass coords to ship after placing
    TWO STEPS, FIRST CREATE SHIP AND THEN PLACE

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

    const _ships = [];

    const placeShip = (coordArray, orientation, length) => {};

    const testMethod = (a, b) => a + b;

    return {
        testMethod,
    };
};