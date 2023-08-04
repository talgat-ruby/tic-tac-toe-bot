import Page from "../index";
import { Component, Hideable } from "../../types";

class TournamentResult extends Page implements Hideable, Component {
  constructor() {
    super();
  }

  onInit() {
    this.el = document.getElementById(
      "page-tournament-result"
    ) as HTMLDivElement;
  }

  onDestroy() {
    this.el = null;
  }

  async render() {
    this.show();
    // this.hide();
  }
}

export default TournamentResult;
