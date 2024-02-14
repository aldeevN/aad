// lib
import Player from "react-player";
import { useRef, useState } from "react";
import { useFullScreenHandle } from "react-full-screen";
import { useDebounce } from "rooks";

// types

import { ReturnProgress } from "./VideoPlayer.types";

export const useVideoPlayer = () => {
  const [isControls, setIsControls] = useState(false);
  const setIsControlsDebounced = useDebounce(setIsControls, 3000);

  const [state, setState] = useState({
    pip: true,
    playing: false,
    controls: true,
    muted: false,
    played: 0,
    duration: 0,
    playbackRate: 1.0,
    volume: 1,
    loop: false,
    seeking: false,
  });

  const usePlayer = useRef<Player | null>(null);

  const handlePlay = (): void => {
    setState((prev) => ({ ...prev, playing: true }));
  };

  const handlePouse = (): void => {
    setState((prev) => ({ ...prev, playing: false }));
  };

  const handleProgress = (progress: ReturnProgress): void => {
    setState((prev) => ({ ...prev, played: progress.playedSeconds }));
  };

  const handleRangeTime = (played: number): void => {
    setState((prev) => ({ ...prev, played }));
  };

  const handleSeel = (value: number): void => {
    usePlayer.current?.seekTo(value);
  };

  const handleMuted = (): void => {
    setState((prev) => ({ ...prev, volume: prev.volume === 0 ? 1 : 0 }));
  };

  const handleChangeVolume = (value: number | number[]): void => {
    if (typeof value === "number") {
      setState((prev) => ({ ...prev, volume: value / 100 }));
    }
  };

  const handleMoveMouseControls = (): void => {
    if (!isControls) {
      setIsControls(true);
    }

    setIsControlsDebounced(false);
  };

  const handleOnEndedMedia = (): void => {
    setState((prev) => ({ ...prev, playing: false }));
  };

  return {
    state,
    usePlayer,
    isControls,
    handlePlay,
    handleProgress,
    handleRangeTime,
    handleSeel,
    handleMuted,
    handleChangeVolume,
    handleMoveMouseControls,
    handleOnEndedMedia,
    handlePouse,
  };
};
