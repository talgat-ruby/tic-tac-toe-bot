import Bot from "./Bot";
import { PIECE } from "./types";

class RavenclawBot extends Bot {
  constructor(name: string, avatarUrl: string) {
    super(name, avatarUrl);
  }

  move(board: PIECE[]) {
    const randomIndex = Math.floor(Math.random() * board.length);
    return randomIndex;
  }
}

export default RavenclawBot;
