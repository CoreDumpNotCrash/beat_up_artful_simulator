import playSound from "@/tools/playSound";
import type React from "react";

interface OnClickProps {
  hitSound: string;
  multiplayer: number;
  setBeatsUp: Function;
  image: string;
}

export const OnClickComponent: React.FC<OnClickProps> = ({
  hitSound,
  multiplayer,
  setBeatsUp,
  image,
}) => {
  function artfulOnClick() {
    let multiplayerTemp = multiplayer <= 0? 1 : multiplayer
    playSound(hitSound);
    setBeatsUp((prev: number) => prev + multiplayerTemp);
  }
  return (
    <>
      <button onClick={artfulOnClick} className="button">
        <img id="artful" src={image} alt="click_image" />
      </button>
    </>
  );
};
