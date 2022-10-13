export const Ship = (shipLength, shipName) => {
    let _hits = 0;
    const _length = shipLength;
    const _name = shipName;

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
