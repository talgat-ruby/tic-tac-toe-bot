import Bot from "./Bot";
import { PIECE } from "./types";

class GryffindorBot extends Bot {
  constructor(name: string, avatarUrl: string) {
    super(name, avatarUrl);
  }

  move(board: PIECE[]) {
    let rowDanger = checkRow(board);
    if (rowDanger !== "no danger") {
      let status = true;
      if (rowDanger == "row1") {
        status = checkZeros([board[0], board[1], board[1]]);
      } else if (rowDanger == "row2") {
        status = checkZeros([board[3], board[4], board[5]]);
      } else {
        status = checkZeros([board[6], board[7], board[8]]);
      }
      if (status === false) {
        rowDanger = "no danger";
      }
    }
    let colDanger = checkCol(board);
    if (colDanger !== "no danger") {
      let status = true;
      if (colDanger == "col1") {
        status = checkZeros([board[0], board[3], board[6]]);
      } else if (colDanger == "col2") {
        status = checkZeros([board[1], board[4], board[7]]);
      } else {
        status = checkZeros([board[2], board[5], board[8]]);
      }
      if (status === false) {
        colDanger = "no danger";
      }
    }
    let diaDanger = checkDia(board);
    if (diaDanger !== "no danger") {
      let status = true;
      if (diaDanger == "dia1") {
        status = checkZeros([board[0], board[4], board[8]]);
      } else {
        status = checkZeros([board[2], board[4], board[6]]);
      }
      if (status === false) {
        diaDanger = "no danger";
      }
    }
    console.log("rowDanger:" + rowDanger);
    console.log("colDanger:" + colDanger);
    console.log("diaDanger:" + diaDanger);
    if (
      rowDanger === "no danger" &&
      colDanger === "no danger" &&
      diaDanger === "no danger"
    ) {
      return attack(board);
    } else if (rowDanger !== "no danger") {
      console.log("I am defending row");
      if (rowDanger == "row1") {
        let arrRow1 = [board[0], board[1], board[2]];
        let value = defend(arrRow1);
        if (value == null) {
          return attack(board);
        }
        if (value == 0) {
          return 0;
        } else if (value == 1) {
          return 1;
        } else {
          return 2;
        }
      } else if (rowDanger == "row2") {
        let arrRow2 = [board[3], board[4], board[5]];
        let value = defend(arrRow2);
        if (value == null) {
          return attack(board);
        }
        if (value == 0) {
          return 3;
        } else if (value == 1) {
          return 4;
        } else {
          return 5;
        }
      } else {
        let arrRow3 = [board[6], board[7], board[8]];
        let value = defend(arrRow3);
        if (value == null) {
          return attack(board);
        }
        if (value == 0) {
          return 3;
        } else if (value == 1) {
          return 4;
        } else {
          return 5;
        }
      }
    } else if (colDanger !== "no danger") {
      console.log("I am defending col");
      if (colDanger == "col1") {
        let arrCol1 = [board[0], board[3], board[6]];
        let value = defend(arrCol1);
        if (value == null) {
          return attack(board);
        }
        if (value == 0) {
          return 0;
        } else if (value == 1) {
          return 3;
        } else {
          return 6;
        }
      } else if (colDanger == "col2") {
        let arrCol2 = [board[1], board[4], board[7]];
        let value = defend(arrCol2);
        if (value == null) {
          return attack(board);
        }
        if (value == 0) {
          return 1;
        } else if (value == 1) {
          return 4;
        } else {
          return 7;
        }
      } else {
        let arrCol3 = [board[2], board[5], board[8]];
        let value = defend(arrCol3);
        if (value == null) {
          return attack(board);
        }
        if (value == 0) {
          return 2;
        } else if (value == 1) {
          return 5;
        } else {
          return 8;
        }
      }
    } else {
      console.log("I am defending dial");
      if (diaDanger == "dia2") {
        let arrDia1 = [board[2], board[4], board[6]];
        let value = defend(arrDia1);
        if (value == null) {
          return attack(board);
        }
        if (value == 0) {
          return 2;
        } else if (value == 1) {
          return 4;
        } else {
          return 6;
        }
      } else {
        let arrCol1 = [board[0], board[4], board[8]];
        let value = defend(arrCol1);
        if (value == null) {
          return attack(board);
        }
        if (value == 0) {
          return 0;
        } else if (value == 1) {
          return 4;
        } else {
          return 8;
        }
      }
    }
  }
}

function checkRow(board: PIECE[]) {
  if (nonZero([board[0], board[1], board[2]])) {
    if (
      board[0] === board[1] ||
      board[0] === board[2] ||
      board[1] === board[2]
    ) {
      return "row1";
    }
  }
  if (nonZero([board[3], board[4], board[5]])) {
    if (
      board[3] === board[4] ||
      board[3] === board[5] ||
      board[4] === board[5]
    ) {
      return "row2";
    }
  }
  if (nonZero([board[6], board[7], board[8]])) {
    if (
      board[6] === board[7] ||
      board[6] === board[8] ||
      board[7] === board[8]
    ) {
      return "row3";
    }
  }
  return "no danger";
}

function checkCol(board: PIECE[]) {
  if (nonZero([board[0], board[3], board[6]])) {
    if (
      board[0] === board[3] ||
      board[0] === board[6] ||
      board[3] === board[6]
    ) {
      return "col1";
    }
  }
  if (nonZero([board[1], board[4], board[7]])) {
    if (
      board[1] === board[4] ||
      board[1] === board[7] ||
      board[4] === board[7]
    ) {
      return "col2";
    }
  }
  if (nonZero([board[2], board[5], board[8]])) {
    if (
      board[2] === board[5] ||
      board[2] === board[8] ||
      board[5] === board[8]
    ) {
      return "col3";
    }
  }
  return "no danger";
}

function checkDia(board: PIECE[]) {
  if (nonZero([board[0], board[4], board[8]])) {
    if (
      board[0] === board[4] ||
      board[0] === board[8] ||
      board[4] === board[8]
    ) {
      return "dia1";
    }
  }
  if (nonZero([board[2], board[4], board[6]])) {
    if (
      board[2] === board[4] ||
      board[2] === board[6] ||
      board[4] === board[6]
    ) {
      return "dia2";
    }
  }
  return "no danger";
}

function nonZero(arr: Array<number>) {
  if (
    (arr[0] !== 0 && arr[1] !== 0) ||
    (arr[0] !== 0 && arr[2] !== 0) ||
    (arr[1] !== 0 && arr[2] !== 0)
  ) {
    return true;
  }
  return false;
}

function checkZeros(arr: Array<number>) {
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      return true;
    }
  }
  return false;
}

function defend(arr: Array<number>) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      return i;
    }
    if (i + 1 == arr.length) {
      return null;
    }
  }
}

function attack(board: PIECE[]) {
  console.log("I am attacking");
  let value = 0;
  for (let i = 0; board.length; i++) {
    if (board[i] === 0) {
      value = i;
      break;
    }
  }
  return value;
}

export default GryffindorBot;
