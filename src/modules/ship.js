export const Ship = (shipLength, coords) => {
    let _hits = 0;
    const _length = shipLength;
    const _coords = coords;

    const getHits = () => _hits;

    const getCoords = () => _coords;

    const getLength = () => _length;

    const hit = () => {
        _hits++;
    };

    const isSunk = () => {
        if (Number(_hits) === Number(_length)) {
            return true;
        }
        return false;
    };

    return {
        getCoords,
        getHits,
        getLength,
        hit,
        isSunk,
    };
};
