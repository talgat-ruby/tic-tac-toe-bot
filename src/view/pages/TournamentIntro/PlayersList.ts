import { Component } from "../../types";
import Player from "../../../model/Player";

class PlayersList implements Component {
  #el: null | HTMLUListElement;

  constructor() {
    this.#el = null;
  }

  onInit() {
    this.#el = document.getElementById("players-list") as HTMLUListElement;
  }

  onDestroy() {
    this.#el = null;
  }

  render(players: Player[]) {
    const children = [];
    for (const player of players) {
      children.push(this.#renderPlayer(player.name, player.avatarUrl));
    }

    this.#el?.replaceChildren(...children);
  }

  #renderPlayer(title: string, src: string) {
    const playerImage = this.#renderPlayerImage(title, src);
    const playerTitle = this.#renderPlayerTitle(title);

    const li = document.createElement("li");
    li.classList.add("card", "card-compact");
    li.append(playerImage, playerTitle);

    return li;
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

export default PlayersList;
