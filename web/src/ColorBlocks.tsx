import React from "react";
import { colors } from "./colors";

export const ColorBlocks: React.FC = () => {
  return (
    <>
      {Object.keys(colors).map((color) => (
        <div>
          <div>{color}</div>
          <div>
            {typeof colors[color] !== "string" ? (
              Object.keys(colors[color]).map((hue, index) => (
                <div>{`${hue}: ${colors[color][index]}`}</div>
              ))
            ) : (
              <div>{colors[color]}</div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};
