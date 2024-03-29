import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "Open Sans",
    heading: "Montserrat",
  },
  animations: {
    bounce: `
    from, 20%, 53%, 80%, to {
      transform: translate3d(0,0,0);
    }
    
    40%, 43% {
      transform: translate3d(0, -16px, 0);
    }
    
    70% {
      transform: translate3d(0, -8px, 0);
    }
    
    90% {
      transform: translate3d(0,-2px,0);
    }
    `,
  },
  colors: {
    brand: {
      default: "#420cbd",
      primary: "#420cbd",
      accent: "#9F5FFF",
      family: ["#420CBD", "#7239E7", "#9F5FFF", "#CB86FF", "#F8AFFF"],
    },
  },
  styles: {
    global: {
      body: {
        background: "black",
      },
      html: {
        scrollBehavior: "smooth",
        scrollPaddingTop: "8rem",
      },
    },
  },
  shadows: { outline: "0 0 0 2px #9F5FFF88" },
  components: {
    Link: {
      baseStyle: {
        transition: "color ease-in-out 200ms",
        color: "brand.default",
        "&:hover": {
          color: "brand.accent",
          textDecoration: "none",
        },
      },
    },
    ResponsiveContainer: {
      baseStyle: {
        px: { base: 4, md: 8 },
      },
    },
    Button: {
      baseStyle: {
        whiteSpace: "unset",
      },
      variants: {
        custom: {
          fontFamily: "Montserrat",
          fontWeight: 500,
          borderRadius: "full",
          py: "0.5rem",
          px: "1rem",
          transition: "filter ease-in-out 200ms",
          bgColor: "brand.primary",
          color: "#fff",
          height: "auto",
          "&:hover": {
            filter: "brightness(0.8)",
          },
          "& svg": {
            mr: "0.25rem",
            fontSize: "1.5rem",
          },
        },
        brand: {
          fontFamily: "Montserrat",
          fontWeight: 500,
          borderRadius: "full",
          py: "0.5rem",
          px: "1rem",
          transition:
            "background-color ease-in-out 200ms, color ease-in-out 200ms, border-color ease-in-out 200ms",
          border: "1px",
          borderColor: "brand.primary",
          color: "brand.primary",
          height: "auto",
          "&:hover": {
            color: "white",
            borderColor: "brand.accent",
            bgColor: "brand.accent",
          },
          "& svg": {
            mr: "0.25rem",
            fontSize: "2.25rem",
          },
        },
      },
    },
    Section: {
      baseStyle: {
        my: 32,
        px: { base: 4, md: 16 },
        py: { base: 8, md: 16 },
        bg: "white",
        boxShadow: "lg",
        borderRadius: "base",
      },
    },
  },
});

export default theme;
