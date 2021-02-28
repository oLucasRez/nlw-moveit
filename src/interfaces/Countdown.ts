export interface Countdown {
  time: number;
  isActive: boolean;
  hasFinished: boolean;
  progress: number;
  start: () => void;
  reset: () => void;
}
