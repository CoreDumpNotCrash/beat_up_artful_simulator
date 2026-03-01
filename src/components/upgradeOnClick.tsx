import type React from "react";
import playSound from "@/tools/playSound";

interface UpgradeOnClickProps {
  beatsUp: number;
  upgradeCost: number;
  discardSound: string;
  buySound: string;
  setUpgradeCost: Function;
  setBeatsUp: Function;
  setMultiplayer: Function;
  multiplayer: number;
}

export const UpgradeOnClickComponent: React.FC<UpgradeOnClickProps> = ({
  beatsUp,
  upgradeCost,
  discardSound,
  buySound,
  setUpgradeCost,
  setBeatsUp,
  setMultiplayer,
  multiplayer,
}) => {
  function upgradeOnClick() {
    if (beatsUp < upgradeCost) {
      playSound(discardSound);
      return;
    }
    playSound(buySound);
    setUpgradeCost(upgradeCost * 2);
    setBeatsUp(beatsUp - upgradeCost);
    setMultiplayer(multiplayer * 2);
  }

  return (
    <>
      <button onClick={upgradeOnClick} className="button">
        Upgrade({upgradeCost} hits)
      </button>
    </>
  );
};
