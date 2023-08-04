import { Component } from "../../types";

class GameNumber implements Component {
  #el: null | HTMLElement;

  constructor() {
    this.#el = null;
  }

  onInit() {
    this.#el = document.getElementById("game-number") as HTMLElement;
  }

  onDestroy() {
    this.#el = null;
  }

  render(num: number) {
    if (this.#el && "innerText" in this.#el) {
      this.#el.innerText = num.toString();
    }
  }
}

export default GameNumber;
