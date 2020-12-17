import React from "react";
import { colors } from "./colors";
import { hexToHsl } from "./utils/colorUtils";

export const ColorBlocks: React.FC = () => {
  const colorPicker = (hex: any) => (hexToHsl(hex)[2] < 50 ? "white" : "black");
  return (
    <>
      {Object.keys(colors).map((color) => (
        <div>
          <div>{color}</div>
          <div>
            {typeof colors[color] !== "string" ? (
              Object.keys(colors[color]).map((hue, index) => (
                <div
                  style={{
                    backgroundColor: colors[color][index],
                    color: `${colorPicker(colors[color][index])}`,
                  }}
                >{`${hue}: ${colors[color][index]}`}</div>
              ))
            ) : (
              <div style={{ backgroundColor: colors[color] as string }}>
                <div
                  style={{
                    color: `${colorPicker(colors[color])}`,
                  }}
                >
                  {colors[color]}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};
