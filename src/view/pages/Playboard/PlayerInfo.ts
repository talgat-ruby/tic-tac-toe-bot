import { Component } from "../../types";
import Player from "../../../model/Player";
import { PIECE } from "../../../model/types";

class PlayerInfo implements Component {
  readonly #elId: string;
  #el: null | HTMLElement;

  constructor(id: string) {
    this.#elId = id;
    this.#el = null;
  }

  onInit() {
    this.#el = document.getElementById(this.#elId) as HTMLElement;
  }

  onDestroy() {
    this.#el = null;
  }

  render(player: Player, piece: PIECE, score: number) {
    this.#el?.replaceChildren(
      this.#renderScore(score),
      this.#renderAvatar(player.avatarUrl),
      this.#renderPlayerName(player.name),
      this.#renderPieceInfo(piece)
    );
  }

  #renderScore(score: number) {
    const h3 = document.createElement("h3");
    h3.classList.add("score");
    h3.textContent = score.toString();

    return h3;
  }

  #renderAvatar(src: string) {
    const img = document.createElement("img");
    img.src = src;

    const container = document.createElement("div");
    container.classList.add("w-24");
    container.classList.add("rounded");
    container.appendChild(img);

    const parent = document.createElement("div");
    parent.classList.add("avatar");
    parent.classList.add("mt-3");
    parent.appendChild(container);

    return parent;
  }

  #renderPlayerName(name: string) {
    const h4 = document.createElement("h4");
    h4.textContent = name;

    return h4;
  }

  #renderPieceInfo(piece: PIECE) {
    const div = document.createElement("div");
    div.classList.add("piece");

    switch (piece) {
      case 1:
        div.classList.add("piece-x");
        break;
      case -1:
        div.classList.add("piece-o");
        break;
    }

    return div;
  }
}

export default PlayerInfo;
