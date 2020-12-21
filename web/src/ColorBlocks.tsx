import React from "react";
import { colors } from "./colors";
import { hexToLightness } from "./utils/colorUtils";

export const ColorBlocks: React.FC = () => {
  const colorPicker = (hex: any) =>
    hexToLightness(hex) < 35 ? "white" : "black";
  return (
    <>
      {Object.keys(colors).map((color, index) => (
        <div key={index}>
          <div>{color}</div>
          <div>
            {typeof colors[color] !== "string" ? (
              Object.keys(colors[color]).map((hue, index) => (
                <div
                  key={`${hue}${index}`}
                  style={{
                    backgroundColor:
                      colors[color][Object.keys(colors[color])[index] as any],
                    color: `${colorPicker(
                      colors[color][Object.keys(colors[color])[index] as any]
                    )}`,
                  }}
                >{`${hue}: ${
                  colors[color][Object.keys(colors[color])[index] as any]
                }`}</div>
              ))
            ) : (
              <div
                key={`${color}`}
                style={{ backgroundColor: colors[color] as string }}
              >
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
