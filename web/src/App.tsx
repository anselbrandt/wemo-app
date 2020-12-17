import React from "react";
import styles from "./App.module.css";
import { ColorBlocks } from "./ColorBlocks";

function App() {
  return (
    <div className={styles.app}>
      <div>wemo-app</div>
      <div>
        <ColorBlocks />
      </div>
    </div>
  );
}

export default App;
