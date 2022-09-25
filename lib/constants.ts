export const COLORS = {
    knackPrimary: "hsl(230deg, 80%, 54%)",
    primary: "hsl(230deg, 80%, 54%)",
    primaryBackground: "hsla(230deg, 80%, 54%, 0.1)",
    knackSecondary: "hsl(170deg, 99%, 32%)",
    text: "hsl(222deg, 22%, 5%)",
    // white
    // background: "hsl(0deg, 0%, 100%)",
    // Figma file background
    background: "hsl(220, 60%, 98%);",
    alert: "hsl(30deg, 100%, 50%)",
    success: "hsl(160deg, 100%, 40%)",
    successBackground: "hsla(160deg, 100%, 40%, 0.1)",
    error: "hsl(340deg, 95%, 60%)",
    indianRed: "hsl(12deg, 35%, 50%)",
    indianRedBackground: "hsla(12deg, 35%, 50%, 0.1)",
    purpleBackground: "hsla(275deg, 100%, 40%, 0.1)",
    purple: "hsl(275deg, 100%, 40%)",
    gray: {
      1000: "hsl(210deg, 15%, 20%)",
      900: "hsl(210deg, 15%, 25%)",
      700: "hsl(210deg, 10%, 40%)",
      600: "hsl(210deg, 9%, 45%)",
      500: "hsl(210deg, 8%, 50%)",
      400: "hsl(210deg, 12%, 55%)",
      300: "hsl(210deg, 14%, 66%)",
      200: "hsl(210deg, 25%, 88%)",
      100: "hsl(210deg, 25%, 96%)"
    },
    paper: "hsl(0, 0%, 98%)"
  };
  
  export const BREAKPOINTS = {
    tabletMin: 550,
    laptopMin: 1100,
    desktopMin: 1500
  };
  export const QUERIES = {
    tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
    laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
    desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`,
    precisePointerDevices: "(pointer:fine)",
    hoverSupported: "(hover:hover)",
    hoverPointerDevices: () => `${QUERIES.hoverSupported} and ${QUERIES.hoverPointerDevices}`
  };
  
  export const ELEVATIONS = {
    small: `
    0px 1px 1.3px hsl(var(--shadow-color) / 0.11),
    0px 1.6px 2.1px -0.7px hsl(var(--shadow-color) / 0.17),
    0px 3.2px 4.2px -1.3px hsl(var(--shadow-color) / 0.24);
    `,
    medium: `
      0px 1px 1.3px hsl(var(--shadow-color) / 0.12),
      0px 3.4px 4.4px -0.4px hsl(var(--shadow-color) / 0.17),
      0.1px 7.3px 9.5px -0.9px hsl(var(--shadow-color) / 0.22),
      0.1px 16.1px 20.9px -1.3px hsl(var(--shadow-color) / 0.27)
  `,
    // medium: `
    //   3.4px 3.4px 3.4px -6px hsl(var(--shadow-color) / 0.7),
    //   8.6px 8.5px 7.3px -6px hsl(var(--shadow-color) / 0.5),
    //   17.7px 17.3px 14.8px -6px hsl(var(--shadow-color) / 0.4),
    //   36.5px 35.7px 30.6px -6px hsl(var(--shadow-color) / 0.3),
    //   100px 98px 84px -6px hsl(var(--shadow-color) / 0.2)
    // `,
    large: `
      0px 1px 1.3px hsl(var(--shadow-color) / 0.12),
      0.1px 5.8px 7.5px -0.2px hsl(var(--shadow-color) / 0.15),
      0.1px 10.5px 13.6px -0.4px hsl(var(--shadow-color) / 0.18),
      0.1px 16.7px 21.7px -0.7px hsl(var(--shadow-color) / 0.21),
      0.2px 26.1px 33.9px -0.9px hsl(var(--shadow-color) / 0.24),
      0.4px 40.3px 52.3px -1.1px hsl(var(--shadow-color) / 0.27),
      0.5px 61px 79.2px -1.3px hsl(var(--shadow-color) / 0.3)
    `
  };