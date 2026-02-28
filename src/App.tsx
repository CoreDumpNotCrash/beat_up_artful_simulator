import { useState } from "react";
import playSound from "./tools/playSound";

import artfulImage from "./assets/image.png";
import hitSound from "./assets/hit.mp3";
import buySound from "./assets/buy.mp3";
import discardSound from "./assets/no.mp3";

import "./index.css";

export function App() {
  const [beatsUp, setBeatsUp] = useState(0);
  const [multiplayer, setMupliplayer] = useState(0);
  const [upgradeCost, setUpgradeCost] = useState(50);

  function artfulOnClick() {
    playSound(hitSound);
    setBeatsUp((prev) => prev + Math.pow(2, multiplayer));
  }

  function upgradeOnClick() {
    if (beatsUp < upgradeCost) {
      playSound(discardSound);
      return;
    }
    playSound(buySound);
    setUpgradeCost(upgradeCost * 2);
    setBeatsUp(beatsUp - upgradeCost);
    setMupliplayer(multiplayer + 1);
  }

  return (
    <div className="app">
      <h1>Beat up Artful!!!</h1>
      <p>(hint: click on the artful if that's not obvious)</p>
      <button onClick={artfulOnClick} className="button">
        <img id="artful" src={artfulImage} alt="artful" />
      </button>
      <p>You beated up Artful {beatsUp} times.</p>
      <button onClick={upgradeOnClick} className="button">
        Upgrade({upgradeCost} clicks)
      </button>
      <h1>if you came from discord you are smelly poo fart</h1>
    </div>
  );
}

export default App;
