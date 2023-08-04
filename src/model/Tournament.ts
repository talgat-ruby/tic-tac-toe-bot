import Player from "./Player";
import Game from "./Game";
import View from "../view";

class Tournament {
  readonly #view: View;
  readonly #players: Player[];
  readonly #games: Game[];
  readonly #numRoundsPerGame: number;

  constructor(view: View, players: Player[], numRoundsPerGame: number) {
    this.#view = view;
    this.#players = players;
    this.#games = [];
    this.#numRoundsPerGame = numRoundsPerGame;
  }

  async start() {
    await this.#view.pageTournamentIntro.render(this.#players);

    this.#initGames();
    await this.#runGames();

    await this.#view.pageTournamentResult.render();
  }

  #initGames() {
    for (let i = 0; i < this.#players.length; i++) {
      const player1 = this.#players[i];
      for (let j = i + 1; j < this.#players.length; j++) {
        const player2 = this.#players[j];
        const game = new Game(
          this.#view,
          player1,
          player2,
          this.#numRoundsPerGame
        );
        this.#games.push(game);
      }
    }
  }

  async #runGames() {
    for (let i = 0; i < this.#games.length; i++) {
      const game = this.#games[i];
      await game.start(i);
    }
  }
}

export default Tournament;
