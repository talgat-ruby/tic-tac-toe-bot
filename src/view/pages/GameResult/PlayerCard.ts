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

  render(player: Player, score: number) {
    this.#el?.replaceChildren(
      this.#renderScore(score),
      this.#renderPlayerImage(player.name, player.avatarUrl),
      this.#renderPlayerTitle(player.name)
    );
  }

  #renderScore(score: number) {
    const h2 = document.createElement("h2");
    h2.classList.add("text-3xl");
    h2.classList.add("flex");
    h2.classList.add("justify-center");
    h2.textContent = score.toString();

    return h2;
  }

  #renderPlayerImage(title: string, src: string) {
    const img = document.createElement("img");
    img.alt = title;
    img.src = src;

    const figure = document.createElement("figure");
    figure.classList.add("mt-3");
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
