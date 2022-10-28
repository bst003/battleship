import { pubsub } from "./pubsub";

export const domFunctions = (() => {
    const _determineCellClass = (cellValue) => {
        if (cellValue === "s") {
            return "ship";
        }

        if (cellValue === "x") {
            return "miss";
        }

        if (cellValue === "h") {
            return "hit";
        }

        return "empty";
    };

    // Will need to pass ID into this
    // Which means player needs to pass ID into board
    const renderBoard = (data) => {
        if (!data.board) {
            console.log("missing board");
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
                cell.setAttribute("data-coord-x", y);
                cell.setAttribute("data-coord-y", i);

                board.appendChild(cell);
            }
        }

        boardsContain.appendChild(board);
    };
    pubsub.subscribe("renderBoard", renderBoard);

    // Will need a board id and the coords
    const renderAttack = (data) => {
        if (!data.coords || !data.mark) {
            console.log("missing attack data");
            return;
        }

        const posX = data.coords[0];
        const posY = data.coords[1];

        console.log(`coords: ${posX}, ${posY} : mark: ${data.mark}`);

        const boardID = data.id;

        const newCellClass = _determineCellClass(data.mark);

        const cell = document.querySelector(
            `.board[data-id="${boardID}"] .board-cell[data-coord-x="${posX}"][data-coord-y="${posY}"]`
        );

        const cellClasses = cell.classList;
        console.log(cellClasses);

        console.log(cell);
        cell.classList.add(newCellClass);
    };
    pubsub.subscribe("renderAttack", renderAttack);

    return {};
})();
