interface Iplane {
  color: string;
  releaseYear: string;
  motor: string;
  model: string;
  turnOn: () => void;
  turnOff: () => void;
  speedUp: () => void;
  speedDown: () => void;
}