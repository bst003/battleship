import { pubsub } from "./pubsub";

export const domFunctions = (() => {
    const renderBoard = (data) => {
        if (!data.board) {
            return;
        }

        const board = document.createElement("div");
    };

    pubsub.subscribe("renderBoard", renderBoard);

    return {};
})();
