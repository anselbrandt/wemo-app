import React from "react";
import { palette } from "./palette";

export const ColorBlocks: React.FC = () => {
  const hues = palette.map((hue) => Object.keys(hue));
  const colors = palette.map((hue) => Object.values(hue));
  return (
    <>
      {hues.map((hue) => (
        <div>{hue}</div>
      ))}
    </>
  );
};
