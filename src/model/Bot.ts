import Player from "./Player";
import { PIECE } from "./types";

class Bot extends Player {
  constructor(name: string, avatarUrl: string) {
    super(name, avatarUrl);
  }

  move(board: PIECE[]) {
    return 0;
  }
}

export default Bot;
