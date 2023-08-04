import { Component } from "../../types";
import { PIECE } from "../../../model/types";

class Cell implements Component {
  #piece: PIECE;
  #el: null | HTMLLIElement;
  readonly #ind: number;
  #resolve: null | ((ind: number) => void);

  constructor(piece: PIECE, ind: number) {
    this.#el = null;
    this.#piece = piece;
    this.#ind = ind;
    this.#resolve = null;
  }

  set resolve(resolve: (ind: number) => void) {
    this.#resolve = resolve;
  }

  get piece() {
    return this.#piece;
  }

  onInit() {
    const li = document.createElement("li");
    li.classList.add("cell");
    li.classList.add("piece-empty");

    li.addEventListener("click", this.#handler);

    this.#el = li;
  }

  onDestroy() {
    this.#el?.removeEventListener("click", this.#handler);

    this.#el = null;
  }

  render() {
    return this.#el;
  }

  update(piece: PIECE) {
    this.#piece = piece;

    switch (piece) {
      case 1:
        this.#el?.classList.replace("piece-empty", "piece-x");
        break;
      case -1:
        this.#el?.classList.replace("piece-empty", "piece-o");
        break;
    }
  }

  #handler = () => {
    this.#resolve?.(this.#ind);
  };
}

export default Cell;
