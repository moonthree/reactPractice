import EffectInfo from "./components/useEffect/EffectInfo";
import AoCounter from "./components/useState/AoCounter";
import BoInfo from "./components/useState/BoInfo";
import React, { useState } from "react";
function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>useEffect</h1>
          <button
            onClick={() => {
              setVisible(!visible);
            }}
          >
            {visible ? "숨기기" : "보이기"}
          </button>
          {visible && <EffectInfo />}
        </div>
        <hr />
        <div>
          <h1>useState</h1>
          <h4>info</h4>
          <BoInfo></BoInfo>
          <hr />
          <h4>Counter</h4>
          <AoCounter></AoCounter>
        </div>
      </header>
    </div>
  );
}

export default App;
