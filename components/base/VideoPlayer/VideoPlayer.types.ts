import { ReactPlayerProps } from "react-player";

export interface VideoPlayerProps extends ReactPlayerProps { }

export interface ReturnProgress {
  loaded: number;
  loadedSeconds: number;
  playedSeconds: number;
  played: number;
  url?: string;
}