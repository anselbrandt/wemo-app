import React from "react";
import styles from "./App.module.css";
import { ColorBlocks } from "./ColorBlocks";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

function App() {
  return (
    <div className={styles.app}>
      <ColorModeSwitcher justifySelf="flex-end" />
      <div>wemo-app</div>
      <div>
        <ColorBlocks />
      </div>
    </div>
  );
}

export default App;
