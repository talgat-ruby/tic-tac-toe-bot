import { Component } from "../../types";

class StartTournamentButton implements Component {
  #el: null | HTMLButtonElement;

  constructor() {
    this.#el = null;
  }

  onInit() {
    this.#el = document.getElementById(
      "btn-start-tournament"
    ) as HTMLButtonElement;
  }

  onDestroy() {
    this.#el = null;
  }

  onClick(listener: (value: unknown) => void) {
    this.#el?.addEventListener("click", listener, { once: true });
  }
}

export default StartTournamentButton;
