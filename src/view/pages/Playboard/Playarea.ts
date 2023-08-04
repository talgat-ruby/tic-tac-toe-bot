import { Component } from "../../types";
import { PIECE } from "../../../model/types";
import Cell from "./Cell";

class Playarea implements Component {
  #el: null | HTMLUListElement;
  #cells: Cell[];

  constructor() {
    this.#el = null;
    this.#cells = [];
  }

  onInit() {
    this.#el = document.getElementById("playarea") as HTMLUListElement;

    for (const cell of this.#cells) {
      cell.onInit();
    }
  }

  onDestroy() {
    this.#el = null;

    for (const cell of this.#cells) {
      cell.onDestroy();
    }
  }

  render(board: PIECE[]) {
    this.#renderCells(board);

    this.#el?.replaceChildren(
      ...this.#cells.map((cell) => cell.render()).filter(this.#filterOutNull)
    );
  }

  renderCell(ind: number, piece: PIECE) {
    this.#cells[ind].update(piece);
  }

  handleEmptyCellClick(resolve: (ind: number) => void) {
    for (const cell of this.#cells) {
      if (cell.piece === 0) {
        cell.resolve = resolve;
      }
    }
  }

  #renderCells(board: PIECE[]) {
    this.#cells = board.map((piece, ind) => new Cell(piece, ind));

    for (const cell of this.#cells) {
      cell.onInit();
    }
  }

  #filterOutNull<T>(value: T | null): value is T {
    return value !== null;
  }
}

export default Playarea;
