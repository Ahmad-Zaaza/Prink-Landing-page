import { createGlobalStyle } from "styled-components";
import { COLORS } from "../lib/constants";

const GlobalStyles = createGlobalStyle`

/*
  1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
  box-sizing: border-box;
}
/*
  2. Remove default margin
*/
* {
  margin: 0;
}
/*
  3. Allow percentage-based heights in the application
*/
html, body {
  height: 100%;
}
/*
  Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  font-family: 'Raleway', sans-serif;
}
/*
  6. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
/*
  7. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}
/*
  8. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
/*
  9. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
  height: 100%;
}





/* CSS Variables */
:root {
--color-background:${COLORS.background};
--color-text:${COLORS.text};
--color-primary:${COLORS.primary};
--color-primary-background:${COLORS.primaryBackground};
--color-on-primary:${COLORS.onPrimary};
--color-secondary:${COLORS.secondary};
--color-secondary-background:${COLORS.secondaryBackground};
--color-on-secondary:${COLORS.onSecondary};

--color-alert:${COLORS.alert};
--color-success:${COLORS.success};
--color-success-background:${COLORS.successBackground};
--color-error:${COLORS.error};
--color-indianRed:${COLORS.indianRed};
--color-indianRed-background:${COLORS.indianRedBackground};
--color-purple:${COLORS.purple};
--color-purple-background:${COLORS.purpleBackground};
--color-gray-100:${COLORS.gray[100]};
--color-gray-200:${COLORS.gray[200]};
--color-gray-300:${COLORS.gray[300]};
--color-gray-400:${COLORS.gray[400]};
--color-gray-500:${COLORS.gray[500]};
--color-gray-600:${COLORS.gray[600]};
--color-gray-700:${COLORS.gray[700]};
--color-gray-900:${COLORS.gray[900]};
--color-gray-1000:${COLORS.gray[1000]};
--shadow-color: 0deg 0% 76%;
--color-border: var(--color-gray-200);
--color-paper-background:${COLORS.paper};
}
  


/* Own styles */

body {
  background-color: var(--color-background);
  color: var(--color-text);
}

a {
  text-decoration: none;
  color:inherit;
}

button {
  text-align: initial ;
  box-shadow:none ;
  border:none;
}


/* Overriding tailwind preflight */
input[type='password']:focus{
  outline-offset: 0;
}


@media (pointer: coarse) {
    html {
      --min-tap-height: 44px;
    }
  }

`;

export default GlobalStyles;
