import { useState, useRef } from "react";
import { ToggleMusicComponent } from "./components/toggleMusic";
import { UpgradeOnClickComponent } from "./components/upgradeOnClick";
import { OnClickComponent } from "./components/onClick";

import artfulImage from "./assets/image.png";
import hitSound from "./assets/hit.mp3";
import buySound from "./assets/buy.mp3";
import discardSound from "./assets/no.mp3";
import music from "./assets/background_music.mp3";

import "./index.css";

export function App() {
  const [beatsUp, setBeatsUp] = useState(0);
  const [multiplayer, setMultiplayer] = useState(1);
  const [upgradeCost, setUpgradeCost] = useState(50);

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(music));

  return (
    <div className="app">
      <h3>
        "if you came from discord you are smelly poo fart" - CoreDumpNotCrash
      </h3>
      <h1>Beat up Artful!!!</h1>
      <p>(hint: click on the artful if that's not obvious)</p>
      <OnClickComponent
        hitSound={hitSound}
        multiplayer={multiplayer}
        setBeatsUp={setBeatsUp}
        image={artfulImage}
      />
      <p>You beated up Artful {beatsUp} times.</p>
      <p>Your hits multiplayer: {multiplayer}</p>
      <div>
        <UpgradeOnClickComponent
          beatsUp={beatsUp}
          upgradeCost={upgradeCost}
          discardSound={discardSound}
          buySound={buySound}
          setUpgradeCost={setUpgradeCost}
          setBeatsUp={setBeatsUp}
          setMultiplayer={setMultiplayer}
          multiplayer={multiplayer}
        />
      </div>
      <div>
        <ToggleMusicComponent
          audioRef={audioRef}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
      </div>
    </div>
  );
}

export default App;
