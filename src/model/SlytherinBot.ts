import Bot from "./Bot";
import { PIECE } from "./types";

class SlytherinBot extends Bot {
  constructor() {
    super("Slytherin", "/assets/slytherin.webp");
  }

  move(board: PIECE[]): number {
    for (let i = 0; i < board.length; i++) {
      const piece = board[i];
      if (piece === 0) {
        return i;
      }
    }

    return 0;
  }
}

export default SlytherinBot;
