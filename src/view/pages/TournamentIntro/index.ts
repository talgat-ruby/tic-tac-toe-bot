import Page from "../index";
import { Component, Hideable } from "../../types";
import PlayersList from "./PlayersList";
import StartTournamentButton from "./StartTournamentButton";
import Player from "../../../model/Player";

class TournamentIntro extends Page implements Hideable, Component {
  readonly #playersList: PlayersList;
  readonly #startTournamentButton: StartTournamentButton;

  constructor() {
    super();
    this.#playersList = new PlayersList();
    this.#startTournamentButton = new StartTournamentButton();
  }

  onInit() {
    this.el = document.getElementById(
      "page-tournament-intro"
    ) as HTMLDivElement;

    this.#startTournamentButton.onInit();
    this.#playersList.onInit();
  }

  onDestroy() {
    this.el = null;

    this.#startTournamentButton.onDestroy();
    this.#playersList.onDestroy();
  }

  async render(players: Player[]) {
    this.show();
    this.#playersList.render(players);
    await this.#onStartClick();
    this.hide();
  }

  #onStartClick() {
    return new Promise((res) => this.#startTournamentButton.onClick(res));
  }
}

export default TournamentIntro;
