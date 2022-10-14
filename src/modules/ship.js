/*

Need to add coordinates var (array) to Ship to store where the ship is placed

*/
export const Ship = (shipLength) => {
    let _hits = 0;
    const _length = shipLength;

    const getHits = () => _hits;

    const hit = () => {
        _hits++;
    };

    const isSunk = () => {
        if (_hits === _length) {
            return true;
        }
        return false;
    };

    const testMethod = (a, b) => a + b;

    return {
        getHits,
        hit,
        isSunk,
        testMethod,
    };
};
