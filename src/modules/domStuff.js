import { pubsub } from "./pubsub";

export const domFunctions = (() => {
    const _determineCellClass = (cellValue) => {
        if (cellValue === "s") {
            return "ship";
        }

        return "empty";
    };

    // Will need to pass ID into this
    // Which means player needs to pass ID into board
    const renderBoard = (data) => {
        if (!data.board) {
            return;
        }

        const boardArray = data.board;
        const boardID = data.id;

        console.log(boardArray);

        const boardsContain = document.querySelector("#boards-contain");

        const board = document.createElement("div");
        board.classList.add("board");
        board.setAttribute("data-id", boardID);

        for (let i = 0; i < boardArray.length; i++) {
            const subArray = boardArray[i];
            for (let y = 0; y < subArray.length; y++) {
                const cellValue = subArray[y];

                const cellClass = _determineCellClass(cellValue);

                const cell = document.createElement("div");
                cell.classList.add("board-cell", cellClass);
                cell.setAttribute("data-coord-x", i);
                cell.setAttribute("data-coord-y", y);

                board.appendChild(cell);
            }
        }

        boardsContain.appendChild(board);
    };

    pubsub.subscribe("renderBoard", renderBoard);

    return {};
})();
