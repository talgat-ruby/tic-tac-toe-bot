import Page from "../index";
import { Component, Hideable } from "../../types";
import PlayerCard from "./PlayerCard";
import GameNumber from "./GameNumber";
import CircleProgress from "./CircleProgress";
import Game from "../../../model/Game";

class GameResult extends Page implements Hideable, Component {
  readonly #player1Card: PlayerCard;
  readonly #player2Card: PlayerCard;
  readonly #gameNumber: GameNumber;
  readonly #circleProgress: CircleProgress;

  constructor() {
    super();
    this.#player1Card = new PlayerCard("player1-card-result");
    this.#player2Card = new PlayerCard("player2-card-result");
    this.#gameNumber = new GameNumber();
    this.#circleProgress = new CircleProgress();
  }

  onInit() {
    this.el = document.getElementById("page-game-result") as HTMLDivElement;

    this.#player1Card.onInit();
    this.#player2Card.onInit();
    this.#gameNumber.onInit();
    this.#circleProgress.onInit();
  }

  onDestroy() {
    this.el = null;

    this.#player1Card.onDestroy();
    this.#player2Card.onDestroy();
    this.#gameNumber.onDestroy();
    this.#circleProgress.onDestroy();
  }

  async render(gameNumber: number, game: Game) {
    this.show();
    this.#gameNumber.render(gameNumber);
    this.#player1Card.render(game.player1, game.score[0]);
    this.#player2Card.render(game.player2, game.score[1]);
    await this.#onProgressEnd();
    this.hide();
  }

  #onProgressEnd() {
    return new Promise((res) => this.#circleProgress.onAnimationEnd(res));
  }
}

export default GameResult;
