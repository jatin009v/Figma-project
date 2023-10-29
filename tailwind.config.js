module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        teal: {
          50: "#d8e6ef",
          100: "#b4d8e4",
          200: "#86c5da",
          300: "#6aa9be",
          400: "#35a7a0",
          A400_11: "#00ffd111",
          "100_01": "#99dfd3",
          "100_02": "#abcbd9",
          "300_01": "#5ec6b8",
          "200_82": "#6cc6bc82",
          "200_05": "#6dc7bd",
          "200_26": "#7db9ce26",
          "200_04": "#6dd9cb",
          "200_07": "#7fbcd1",
          "200_06": "#68c4ba",
          "200_01": "#66b1ca",
          "200_03": "#73adc1",
          "200_02": "#88c7dd",
          "200_5b": "#86c4d95b",
        },
        blue_gray: {
          50: "#ebf3f5",
          600: "#596774",
          800: "#3a4651",
          "300_e0": "#88adc8e0",
          "500_84": "#497d9384",
        },
        light_blue: { 100: "#afe9fd" },
        gray: {
          50: "#f4fcff",
          200: "#efefef",
          800: "#3a3a3a",
          900: "#282828",
          "800_01": "#42454a",
        },
        black: { 900: "#000000", "900_99": "#00000099" },
        blue: { 100: "#c5e2f0", "200_b2": "#97d3ffb2", "100_01": "#c7ebfa" },
        white: { A700: "#ffffff" },
      },
      backgroundImage: {
        gradient: "linear-gradient(178deg ,#afe9fd,#73adc1)",
        gradient1: "linear-gradient(146deg ,#99dfd3,#35a7a0)",
        gradient2: "radial-gradient(#ebf3f5,#c5e2f0)",
        gradient3: "linear-gradient(136deg ,#d8e6ef,#b4d8e4)",
        gradient4: "radial-gradient(#99dfd3,#35a7a0)",
        gradient5: "linear-gradient(180deg ,#88c7dd,#73adc1)",
      },
      fontFamily: { neumaticgothic: "Neumatic Gothic", inter: "Inter" },
      boxShadow: {
        bs1: "36px 46px  124px 0px #88adc8e0",
        bs: "80px 79px  170px 0px #497d9384",
      },
      textShadow: { ts: "54px 61px  90px #6cc6bc82" },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
