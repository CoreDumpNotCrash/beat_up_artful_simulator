import type React from "react";
import type { JSX, RefObject } from "react";

interface ToggleMusicProps {
  audioRef: RefObject<HTMLAudioElement>;
  isPlaying: boolean;
  setIsPlaying: Function;
}

export const ToggleMusicComponent: React.FC<ToggleMusicProps> = ({
  audioRef,
  isPlaying,
  setIsPlaying,
}) => {
  const toggleMusic = () => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.pause();
      audio.currentTime = 0;
    } else {
      audio.loop = true;
      audio.volume = 0.5;
      audio.play().catch(() => {});
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <button onClick={toggleMusic} className="button">
        Toggle Music
      </button>
    </>
  );
};
