import "./index.css";
import artfulImage from "./assets/image.png"
import { useState } from "react";
import hitSound  from "./assets/hit.mp3"

export function App() {
  const [beatsUp, setBeatsUp] = useState(0);
  function handleOnClick() {
    const audio = new Audio(hitSound);
    audio.play();
    setBeatsUp(beatsUp + 1);
  }
  return (
    <div className="app">
      <h1>Beat up Artful!!!</h1>
      <p>(hint: click on the artful if that's not obvious)</p>
      <button onClick={handleOnClick}>
        <img id="artful" src={artfulImage} alt="artful"/>
      </button>
      <p>You beated up Artful {beatsUp} times.</p>
    </div>
  );
}

export default App;
