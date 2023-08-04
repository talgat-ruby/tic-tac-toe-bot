import { Component } from "../../types";

const ANIMATION_DURATION = 1500;

class CircleProgress implements Component {
  #el: null | SVGCircleElement;

  constructor() {
    this.#el = null;
  }

  onInit() {
    this.#el = document.getElementById(
      "circle-progress-result"
    ) as unknown as SVGCircleElement;
  }

  onDestroy() {
    this.#el = null;
  }

  onAnimationEnd(listener: (value: unknown) => void) {
    this.#el?.style.setProperty("--duration", `${ANIMATION_DURATION}ms`);
    this.#el?.addEventListener("animationend", listener, { once: true });
  }
}

export default CircleProgress;
