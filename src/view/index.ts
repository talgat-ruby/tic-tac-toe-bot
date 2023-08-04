import TournamentIntro from "./pages/TournamentIntro/index";
import GameIntro from "./pages/GameIntro/index";
import Playboard from "./pages/Playboard/index";
import GameResult from "./pages/GameResult/index";
import TournamentResult from "./pages/TournamentResult/index";
import { Component } from "./types";

class View implements Component {
  readonly pageTournamentIntro: TournamentIntro;
  readonly pageGameIntro: GameIntro;
  readonly pagePlayboard: Playboard;
  readonly pageGameResult: GameResult;
  readonly pageTournamentResult: TournamentResult;

  constructor() {
    this.pageTournamentIntro = new TournamentIntro();
    this.pageGameIntro = new GameIntro();
    this.pagePlayboard = new Playboard();
    this.pageGameResult = new GameResult();
    this.pageTournamentResult = new TournamentResult();
  }

  onInit() {
    this.pageTournamentIntro.onInit();
    this.pageGameIntro.onInit();
    this.pagePlayboard.onInit();
    this.pageGameResult.onInit();
    this.pageTournamentResult.onInit();
  }

  onDestroy() {
    this.pageTournamentIntro.onDestroy();
    this.pageGameIntro.onDestroy();
    this.pagePlayboard.onDestroy();
    this.pageGameResult.onDestroy();
    this.pageTournamentResult.onDestroy();
  }
}

export default View;
