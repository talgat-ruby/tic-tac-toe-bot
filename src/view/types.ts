export interface Component {
  onInit(): void;

  onDestroy(): void;
}

export interface Hideable {
  el: null | HTMLDivElement;

  show(): void;

  hide(): void;
}
