import { pubsub } from "./pubsub";

export const reusedMethods = (() => {
    const genRandomCoordinates = () => {
        const x = Math.floor(Math.random() * 10);
        const y = Math.floor(Math.random() * 10);

        return [x, y];
    };
    pubsub.subscribe("getRandomCoordinates", genRandomCoordinates);

    return {};
})();
