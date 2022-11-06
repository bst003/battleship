import { pubsub } from "./pubsub";

export const domFunctions = (() => {
    const _clearContent = (parent) => {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    };

    const clearBoardsContain = () => {
        const boardsContain = document.querySelector("#boards-contain");

        _clearContent(boardsContain);
    };

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

    const _createBoard = (boardArray, boardID) => {
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
                    // console.log(`id is ${typeof boardID}`);
                    cell.addEventListener("click", _attackCell);
                }

                board.appendChild(cell);
            }
        }

        return board;
    };

    const removeCellListeners = () => {
        const board = document.querySelector(".board[data-id='1']");

        const cells = board.querySelectorAll(".board-cell");

        cells.forEach((cell) => {
            cell.removeEventListener("click", _attackCell);
        });
    };
    pubsub.subscribe("gameOver", removeCellListeners);
    pubsub.subscribe("gameOver", clearBoardsContain);

    const _updateCellClass = (cell, newCellClass) => {
        const cellClasses = cell.className.split(" ");
        const currentMarkClass = cellClasses[1];

        cell.classList.remove(currentMarkClass);
        cell.classList.add(newCellClass);
    };

    const renderShip = (data) => {
        if (!data.shipCoords) {
            // console.log("missing ship coords");
            return;
        }

        const boardID = data.id;
        const boardElements = document.querySelectorAll(`.board[data-id="${boardID}"]`);

        const coords = data.shipCoords;

        boardElements.forEach((boardElement) => {
            for (let i = 0; i < coords.length; i++) {
                const posX = coords[i][0];
                const posY = coords[i][1];

                const cell = boardElement.querySelector(
                    `.board-cell[data-coord-x="${posX}"][data-coord-y="${posY}`
                );

                _updateCellClass(cell, "ship");
            }
        });
    };
    pubsub.subscribe("renderShip", renderShip);

    // Will need to pass ID into this
    // Which means player needs to pass ID into board
    const renderBoard = (data) => {
        if (!data.board) {
            // console.log("missing board");
            return;
        }

        const boardArray = data.board;
        const boardID = data.id;

        const boardsContain = document.querySelector("#boards-contain");

        const board = _createBoard(boardArray, boardID);

        boardsContain.appendChild(board);
    };
    pubsub.subscribe("renderBoard", renderBoard);

    // Will need a board id and the coords
    const renderAttack = (data) => {
        if (!data.coords || !data.mark) {
            // console.log("missing attack data");
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

    const _createModal = (modalID, heading = "") => {
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

        const modalHeading = document.createElement("h2");
        modalHeading.innerText = heading;
        modalHeader.appendChild(modalHeading);

        modalContainer.appendChild(modalHeader);

        const modalContent = document.createElement("main");
        modalContent.classList.add("modal__content");
        // modalContent.innerText = "this is a test";
        modalContainer.appendChild(modalContent);

        modalOverlay.appendChild(modalContainer);

        modal.appendChild(modalOverlay);

        return modal;
    };

    const _showShipPlacement = (e) => {
        const cell = e.currentTarget;

        const board = cell.parentElement;

        const startPos = _getCellCoords(cell);

        const shipLengthsString = board.getAttribute("data-ships");
        const shipLengthsArray = shipLengthsString.split(",");

        const finalCoordsData = {
            startPos,
            orientation: board.getAttribute("data-orientation"),
            length: shipLengthsArray[0],
        };
        const finalCoords = pubsub.pull("getFinalShipCoords", finalCoordsData)[0];

        for (let i = 0; i < finalCoords.length; i++) {
            const posX = finalCoords[i][0];
            const posY = finalCoords[i][1];

            const currentCell = board.querySelector(
                `.board-cell[data-coord-x="${posX}"][data-coord-y="${posY}`
            );
            if (currentCell) {
                currentCell.classList.add("place-hover");
            }
        }
    };

    const _removeShipPlacement = (e) => {
        const cell = e.currentTarget;

        const board = cell.parentElement;

        const startPos = _getCellCoords(cell);

        const shipLengthsString = board.getAttribute("data-ships");
        const shipLengthsArray = shipLengthsString.split(",");

        const finalCoordsData = {
            startPos,
            orientation: board.getAttribute("data-orientation"),
            length: shipLengthsArray[0],
        };
        const finalCoords = pubsub.pull("getFinalShipCoords", finalCoordsData)[0];

        for (let i = 0; i < finalCoords.length; i++) {
            const posX = finalCoords[i][0];
            const posY = finalCoords[i][1];

            const currentCell = board.querySelector(
                `.board-cell[data-coord-x="${posX}"][data-coord-y="${posY}`
            );
            if (currentCell) {
                currentCell.classList.remove("place-hover");
            }
            // currentCell.classList.remove("place-hover");
        }
    };

    const _endGameAfterClick = (board) => {
        const data = {};
        data.boardElement = board;

        const modalsContain = document.querySelector("#modals-contain");

        pubsub.publish("preBoardModalClose", data);
        MicroModal.close("placement-modal");
        _clearContent(modalsContain);
    };

    const _placeShipOnClick = (e) => {
        const cell = e.currentTarget;
        const board = cell.parentElement;

        const playerID = board.getAttribute("data-id");

        const shipLengthsString = board.getAttribute("data-ships");
        const shipLengthsArray = shipLengthsString.split(",");

        const startPos = _getCellCoords(cell);
        const orientation = board.getAttribute("data-orientation");
        const length = shipLengthsArray[0];

        const finalCoordsData = {
            startPos,
            orientation,
            length,
        };

        const players = pubsub.pull("domGetPlayers")[0];
        const playerBoard = players[playerID].getPlayerBoard();

        const finalCoords = playerBoard.generateAllShipCoordinates(finalCoordsData);

        const validCoords = playerBoard.validPlaceCoords(finalCoords);

        // const finalCoords = pubsub.pull("getFinalShipCoords", finalCoordsData)[0];

        // const validCoords = pubsub.pull("checkForValidCoords", finalCoords)[0];

        if (!validCoords) {
            console.log("invalid placement");
            return;
        }

        shipLengthsArray.shift();
        board.setAttribute("data-ships", shipLengthsArray);

        playerBoard.placeShip(startPos, orientation, length);

        if (playerBoard.getShips().length === 5) {
            _endGameAfterClick(board);
        }
    };

    const _renderModalBoard = () => {
        const id = 0;
        const boardArray = [
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

        const boardElement = _createBoard(boardArray, id);
        boardElement.setAttribute("data-orientation", "hori");

        const shipLengths = [5, 4, 3, 3, 2];
        boardElement.setAttribute("data-ships", shipLengths);

        const boardElementCells = boardElement.querySelectorAll(".board-cell");

        boardElementCells.forEach((boardCell) => {
            boardCell.addEventListener("mouseover", _showShipPlacement);
            boardCell.addEventListener("mouseout", _removeShipPlacement);
            boardCell.addEventListener("click", _placeShipOnClick);
        });

        return boardElement;
    };

    const _toggleBoardOrientation = (e) => {
        const board = document.querySelector("#placement-modal .board");
        const placeOrientation = board.getAttribute("data-orientation");

        const newOrientation = placeOrientation === "vert" ? "hori" : "vert";

        board.setAttribute("data-orientation", newOrientation);
    };

    const _renderOrientationSwitch = () => {
        const button = document.createElement("button");
        button.innerText = "Rotate Ship";
        button.classList.add("button");
        button.addEventListener("click", _toggleBoardOrientation);

        return button;
    };

    const _removerOrientationToggleListener = () => {
        const toggleButton = document.querySelector("#placement-modal .button");
        toggleButton.removeEventListener("click", _toggleBoardOrientation);
    };

    const _removeModalCellListeners = (cells) => {
        cells.forEach((cell) => {
            cell.removeEventListener("mouseover", _showShipPlacement);
            cell.removeEventListener("mouseout", _removeShipPlacement);
            cell.removeEventListener("click", _placeShipOnClick);
        });
    };

    const preBoardModalClose = (data) => {
        const board = data.boardElement;
        const cells = board.querySelectorAll(".board-cell");

        _removeModalCellListeners(cells);
        _removerOrientationToggleListener();
    };
    pubsub.subscribe("preBoardModalClose", preBoardModalClose);

    const renderPlacementModal = () => {
        const modal = _createModal("placement-modal", "Time to Place Your Ships");
        const modalsContain = document.querySelector("#modals-contain");
        modalsContain.appendChild(modal);

        const modalContent = modal.querySelector(".modal__content");

        const boardElement = _renderModalBoard();

        const orientationButton = _renderOrientationSwitch();

        modalContent.appendChild(orientationButton);
        modalContent.appendChild(boardElement);

        MicroModal.show("placement-modal");
    };
    pubsub.subscribe("startGame", renderPlacementModal);

    const _determineWinnerMessage = (winnerID) => {
        if (Number(winnerID) === Number(0)) {
            return "You win!";
        }
        return "The computer wins this round!";
    };

    const _renderWinnerMessage = (winnerID) => {
        const message = document.createElement("p");
        message.innerText = _determineWinnerMessage(winnerID);

        return message;
    };

    const _restartGame = (e) => {
        const button = e.currentTarget;

        button.removeEventListener("click", _restartGame);

        MicroModal.close("restart-modal");

        _clearContent("#modals-contain");

        pubsub.publish("startGame");
    };

    const _renderRestartButton = () => {
        const button = document.createElement("button");
        button.innerText = "Play Again";
        button.classList.add("button");
        button.setAttribute("id", "restart-button");
        button.addEventListener("click", _restartGame);

        return button;
    };

    const renderRestartModal = (data) => {
        const modal = _createModal("restart-modal", "Game Over");
        const modalsContain = document.querySelector("#modals-contain");
        modalsContain.appendChild(modal);

        const modalContent = modal.querySelector(".modal__content");

        const modalMessage = _renderWinnerMessage(data.winner);

        const restartButton = _renderRestartButton();

        modalContent.appendChild(modalMessage);
        modalContent.appendChild(restartButton);

        MicroModal.show("restart-modal");
    };
    pubsub.subscribe("gameOver", renderRestartModal);

    return {};
})();
