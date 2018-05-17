import { storiesOf } from "@storybook/react";
import React from "react";
import { ThemeProvider } from "styled-components";

import { THEME_MAIN } from "binary-ui-styles";

import BinaryUICarousel0 from "./carousels/carousel-0";
import BinaryUICarousel1 from "./carousels/carousel-1";
import BinaryUICarousel2 from "./carousels/carousel-2";
import BinaryUICarousel4 from "./carousels/carousel-4";
import BinaryUICarousel4Loop from "./carousels/carousel-4-loop";

storiesOf("binary-ui-carousel", module)
  .add("0 options", () => (
    <ThemeProvider theme={THEME_MAIN}>
      <BinaryUICarousel0 />
    </ThemeProvider>
  ))
  .add("1 options", () => (
    <ThemeProvider theme={THEME_MAIN}>
      <BinaryUICarousel1 />
    </ThemeProvider>
  ))
  .add("2 options", () => (
    <ThemeProvider theme={THEME_MAIN}>
      <BinaryUICarousel2 />
    </ThemeProvider>
  ))
  .add("4 options", () => (
    <ThemeProvider theme={THEME_MAIN}>
      <BinaryUICarousel4 />
    </ThemeProvider>
  ))
  .add("4 options loop", () => (
    <ThemeProvider theme={THEME_MAIN}>
      <BinaryUICarousel4Loop />
    </ThemeProvider>
  ));
