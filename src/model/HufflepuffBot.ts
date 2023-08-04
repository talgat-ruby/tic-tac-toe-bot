import Bot from "./Bot";
import { PIECE } from "./types";

class HufflepuffBot extends Bot {
  constructor(name: string, avatarUrl: string) {
    super(name, avatarUrl);
  }

  move(board: PIECE[]) {
    // First, check if the bot can win in the next move
    for (let i = 0; i < board.length; i++) {
      if (board[i] === 0) {
        const newBoard = [...board];
        newBoard[i] = -1;
        if (this.checkWin(newBoard) === -1) {
          return i;
        }
      }
    }

    // Then, check if the player can win in the next move and block them
    for (let i = 0; i < board.length; i++) {
      if (board[i] === 0) {
        const newBoard = [...board];
        newBoard[i] = 1;
        if (this.checkWin(newBoard) === 1) {
          return i;
        }
      }
    }

    // Finally, choose the first empty cell
    for (let i = 0; i < board.length; i++) {
      if (board[i] === 0) {
        return i;
      }
    }

    // If no empty cell is found, return -1 to indicate the game is a draw
    return -1;
  }

  checkWin(board: PIECE[]) {
    // Check rows
    for (let i = 0; i <= 6; i += 3) {
      if (board[i] === board[i + 1] && board[i + 1] === board[i + 2]) {
        return board[i];
      }
    }

    // Check columns
    for (let i = 0; i < 3; i++) {
      if (board[i] === board[i + 3] && board[i + 3] === board[i + 6]) {
        return board[i];
      }
    }

    // Check diagonals
    if (board[0] === board[4] && board[4] === board[8]) {
      return board[0];
    }
    if (board[2] === board[4] && board[4] === board[6]) {
      return board[2];
    }

    // No win found
    return 0;
  }
}

export default HufflepuffBot;
