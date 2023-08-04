import { Component } from "../../types";
import Player from "../../../model/Player";

class PlayerCard implements Component {
  readonly #elId: string;
  #el: null | HTMLLIElement;

  constructor(id: string) {
    this.#elId = id;
    this.#el = null;
  }

  onInit() {
    this.#el = document.getElementById(this.#elId) as HTMLLIElement;
  }

  onDestroy() {
    this.#el = null;
  }

  render(player: Player) {
    this.#el?.replaceChildren(
      this.#renderPlayerImage(player.name, player.avatarUrl),
      this.#renderPlayerTitle(player.name)
    );
  }

  #renderPlayerImage(title: string, src: string) {
    const img = document.createElement("img");
    img.alt = title;
    img.src = src;

    const figure = document.createElement("figure");
    figure.appendChild(img);

    return figure;
  }

  #renderPlayerTitle(title: string) {
    const h3 = document.createElement("h3");
    h3.classList.add("card-title");
    h3.textContent = title;

    const section = document.createElement("section");
    section.classList.add("card-body");
    section.appendChild(h3);

    return section;
  }
}

export default PlayerCard;
