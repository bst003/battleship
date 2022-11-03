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

    const _determineAttackingPlayerID = (receivingPlayerID) => {
        if (receivingPlayerID === 0) {
            return Number(1);
        }
        return Number(0);
    };

    const _getCellBoardPlayerID = (cell) => {
        const board = cell.parentElement;
        return board.getAttribute("data-id");
    };

    const _getCellCoords = (cell) => {
        const posX = Number(cell.getAttribute("data-coord-x"));
        const posY = Number(cell.getAttribute("data-coord-y"));

        return [posX, posY];
    };

    const _attackCell = (e) => {
        const cell = e.currentTarget;
        cell.removeEventListener("click", _attackCell);

        const coords = _getCellCoords(cell);

        const playerID = _getCellBoardPlayerID(cell);

        const attackingPlayerID = _determineAttackingPlayerID(playerID);

        const players = pubsub.pull("domGetPlayers")[0];

        const receivingPlayer = players[playerID];
        const attackingPlayer = players[attackingPlayerID];

        attackingPlayer.attack(receivingPlayer, coords);
    };

    const _createCell = (cellClass, posX, posY) => {
        const cell = document.createElement("div");
        cell.classList.add("board-cell", cellClass);
        cell.setAttribute("data-coord-x", posX);
        cell.setAttribute("data-coord-y", posY);

        return cell;
    };

    const _updateCellClass = (cell, newCellClass) => {
        const cellClasses = cell.className.split(" ");
        const currentMarkClass = cellClasses[1];

        cell.classList.remove(currentMarkClass);
        cell.classList.add(newCellClass);
    };

    const renderShip = (data) => {
        if (!data.shipCoords) {
            console.log("missing ship coords");
            return;
        }

        const boardID = data.id;
        const boardElement = document.querySelector(`.board[data-id="${boardID}"]`);

        const coords = data.shipCoords;

        for (let i = 0; i < coords.length; i++) {
            const posX = coords[i][0];
            const posY = coords[i][1];

            const cell = boardElement.querySelector(
                `.board-cell[data-coord-x="${posX}"][data-coord-y="${posY}`
            );

            _updateCellClass(cell, "ship");
        }
    };
    pubsub.subscribe("renderShip", renderShip);

    // Will need to pass ID into this
    // Which means player needs to pass ID into board
    const renderBoard = (data) => {
        if (!data.board) {
            console.log("missing board");
            return;
        }

        const boardArray = data.board;
        const boardID = data.id;

        const boardsContain = document.querySelector("#boards-contain");

        const board = document.createElement("div");
        board.classList.add("board");
        board.setAttribute("data-id", boardID);

        for (let i = 0; i < boardArray.length; i++) {
            const subArray = boardArray[i];
            for (let z = 0; z < subArray.length; z++) {
                const cellValue = subArray[z];

                const cellClass = _determineCellClass(cellValue);

                const cell = _createCell(cellClass, z, i);

                if (Number(boardID) === Number(1)) {
                    console.log(`id is ${typeof boardID}`);
                    cell.addEventListener("click", _attackCell);
                }

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

        // console.log(`coords: ${posX}, ${posY} : mark: ${data.mark}`);

        const boardID = data.id;

        const newCellClass = _determineCellClass(data.mark);

        const cell = document.querySelector(
            `.board[data-id="${boardID}"] .board-cell[data-coord-x="${posX}"][data-coord-y="${posY}"]`
        );

        _updateCellClass(cell, newCellClass);
    };
    pubsub.subscribe("renderAttack", renderAttack);

    const _createModal = (modalID) => {
        const modal = document.createElement("div");

        modal.classList.add("modal", "micromodal-slide");
        modal.setAttribute("id", modalID);
        modal.setAttribute("aria-hidden", "true");

        const modalOverlay = document.createElement("div");
        modalOverlay.classList.add("modal__overlay");
        modalOverlay.setAttribute("tabindex", "-1");

        const modalContainer = document.createElement("div");
        modalContainer.classList.add("modal__container");
        modalContainer.setAttribute("role", "dialog");

        const modalHeader = document.createElement("header");
        modalHeader.classList.add("modal__header");
        modalContainer.appendChild(modalHeader);

        const modalContent = document.createElement("main");
        modalContent.classList.add("modal__content");
        modalContent.innerText = "this is a test";
        modalContainer.appendChild(modalContent);

        modalOverlay.appendChild(modalContainer);

        modal.appendChild(modalOverlay);

        return modal;
    };

    const renderModal = () => {
        const modal = _createModal("test-modal");
        const body = document.querySelector("#site-body");
        body.appendChild(modal);
        MicroModal.show("test-modal");
    };
    pubsub.subscribe("testModal", renderModal);

    return {};
})();
