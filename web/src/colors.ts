// https://javisperez.github.io/tailwindcolorshades/?blue-ribbon=5468ff

interface Palette {
  [shade: number]: string;
}

interface Color {
  [color: string]: Palette | string;
}

export const colors: Color = {
  white: "#fff",
  black: "#000",
  // nebula: "#5468ff",
  moon: "#f5f5fa",
  asteroid: "#dddfed",
  proton: "#c5c9e0",
  nova: "#848ab8",
  telluric: "#5d6494",
  solstice: "#3a416f",
  cosmos: "#21243d",
  antimatter: "#0b0f20",

  nebula: {
    50: "#f6f7ff",
    100: "#eef0ff",
    200: "#d4d9ff",
    300: "#bbc3ff",
    400: "#8795ff",
    500: "#5468ff",
    600: "#4c5ee6",
    700: "#3f4ebf",
    800: "#323e99",
    900: "#29337d",
  },

  neptune: {
    0: "#3944a0",
    1: "#565db6",
    2: "#7178cc",
    3: "#8c93e2",
    4: "#a6b0f9",
  },
  mercury: {
    0: "#008fba",
    1: "#2da7cb",
    2: "#5bbfdd",
    3: "#88d6ee",
    4: "#b5eeff",
  },
  jupiter: {
    0: "#3ab2bd",
    1: "#61c5c8",
    2: "#89d9d3",
    3: "#b0ecde",
    4: "#d7ffe9",
  },
  saturn: {
    0: "#ec8b63",
    1: "#f3a57e",
    2: "#f8be9a",
    3: "#fcd7b7",
    4: "#fdf1d4",
  },
  mars: {
    0: "#ed5a6a",
    1: "#f27885",
    2: "#f695a0",
    3: "#fbb3ba",
    4: "#ffd0d5",
  },
  venus: {
    0: "#ae3e88",
    1: "#d44fa4",
    2: "#ea71bc",
    3: "#f89ad3",
    4: "#ffcae9",
  },
};
