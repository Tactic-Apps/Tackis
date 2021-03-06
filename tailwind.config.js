const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    options: {
      safelist: [
        "breadcrumb__list",
        "breadcrumb__separator",
        "breadcrumb__link",
      ],
    },
  },
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    listStyleType: {
      none: "none",
      square: "square",
      roman: "upper-roman",
    },
    extend: {
      container: {
        center: true,
        padding: "2rem",
      },
      fontFamily: {
        sans: ["Nunito", ...defaultTheme.fontFamily.sans], //Adding a font to the font-sans class that is defined in tailwindStyles.css
        paragraph: ["Montserrat", "sans-serif"],
      },
      fontWeight: {
        extralight: 200,
        light: 300,
        normal: 400,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900, //Only adding the available Nunito font sizes
      },
      colors: {
        primary: {
          light: "#92E64D",
          DEFAULT: "#5bc500",
          dark: "#387B00",
        },
        secondary: {
          light: "#FEA9AB",
          DEFAULT: "#fa8185",
          dark: "#D65154",
        },
        gray: {
          light: "#5D666F",
          DEFAULT: "#212529",
          dark: "#0D161F",
        },
        warning: {
          light: "#E74D7C",
          DEFAULT: "#C6003C",
          dark: "#7B0025",
        },
      },
      height: {
        hero: "88vh",
      },
      maxWidth: {
        "1/2": "50%",
      },
      zIndex: {
        "-10": "-10",
        "-20": "-20",
      },
      lineHeight: {
        12: "3rem",
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      backgroundColor: ["disabled"],
      textColor: ["disabled"],
      cursor: ["disabled", "hover"],
      transform: ["hover"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"), //Plugin for 'prose' class to style articles (or don't add it and style everything manually). npm install @tailwindcss/typography
    require("@tailwindcss/forms"), //Resets forms, npm install @tailwindcss/forms
  ],
}
