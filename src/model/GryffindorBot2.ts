import Bot from "./Bot";
import { PIECE } from "./types";

class GryffindorBot extends Bot {
  constructor(name: string, avatarUrl: string) {
    super(name, avatarUrl);
  }

  move(board: PIECE[]) {
    let array = [];
    for (let i = 0; i < board.length; i++) {
      if (board[i] === 1) {
        array.push("a");
      } else if (board[i] === 0) {
        array.push("o");
      } else {
        array.push("b");
      }
    }

    for (let i = 0; i < board.length; i = i + 3) {
      let str = array[i] + array[i + 1] + array[i + 2];
      switch (str) {
        case "aao":
          return i + 2;
          break;
        case "aoa":
          return i + 1;
          break;
        case "oaa":
          return i;
          break;
      }
    }

    for (let i = 0; i < 3; i++) {
      let str2 = array[i] + array[i + 3] + array[i + 6];
      switch (str2) {
        case "aoa":
          return i + 3;
          break;
        case "aao":
          return i + 6;
          break;
        case "oaa":
          return i;
          break;
      }
    }

    let str3 = array[0] + array[4] + array[8];
    switch (str3) {
      case "aao":
        return 8;
        break;
      case "aoa":
        return 4;
        break;
      case "oaa":
        return 0;
        break;
    }

    let str4 = array[2] + array[4] + array[6];
    switch (str4) {
      case "aao":
        return 6;
        break;
      case "aoa":
        return 4;
        break;
      case "oaa":
        return 2;
        break;
    }

    for (let i = 0; i < board.length; i = i + 3) {
      let str5 = array[i] + array[i + 1] + array[i + 2];
      switch (str5) {
        case "bbo":
          return i + 2;
          break;
        case "bob":
          return i + 1;
          break;
        case "obb":
          return i;
          break;
      }
    }

    for (let i = 0; i < 3; i++) {
      let str6 = array[i] + array[i + 3] + array[i + 6];
      switch (str6) {
        case "bob":
          return i + 3;
          break;
        case "bbo":
          return i + 6;
          break;
        case "obb":
          return i;
          break;
      }
    }

    let str7 = array[0] + array[4] + array[8];
    switch (str7) {
      case "bbo":
        return 8;
        break;
      case "bob":
        return 4;
        break;
      case "obb":
        return 0;
        break;
    }

    let str8 = array[2] + array[4] + array[6];
    switch (str8) {
      case "bbo":
        return 6;
        break;
      case "bob":
        return 4;
        break;
      case "obb":
        return 2;
        break;
    }

    if (board.every((elem) => elem === 0)) {
      return getRandom();
    }

    if (board[4] === 0) {
      return 4;
    }
    for (let i = 0; i < board.length; i = i + 2) {
      if (board[i] === 0) {
        return i;
      }
    }

    function getRandom() {
      return Math.floor(Math.random() * 9);
    }

    let num = getRandom();
    while (board[num] !== 0) {
      num = getRandom();
    }
    return num;
  }
}

export default GryffindorBot;
