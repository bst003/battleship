export const Ship = (shipLength, shipName) => {
    let _hits = 0;
    const _length = shipLength;
    const _name = shipName;

    const _getHits = () => _hits;

    const hit = () => {
        _hits++;
    };

    const testMethod = (a, b) => a + b;

    return {
        _getHits,
        hit,
        testMethod,
    };
};
