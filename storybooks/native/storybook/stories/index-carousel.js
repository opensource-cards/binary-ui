import { storiesOf } from "@storybook/react-native";
import React from "react";
import { ThemeProvider } from "styled-components";

import { THEME_MAIN } from "binary-ui-styles";

import BinaryUICarousel0 from "./carousels/carousel-0";
import BinaryUICarousel4 from "./carousels/carousel-4";
import BinaryUICarousel4Loop from "./carousels/carousel-4-loop";
import BinaryUICarousel4LoopWithScrollView from "./carousels/carousel-4-loop-with-scroll-view";

storiesOf("binary-ui-carousel", module)
  .add("0 options", () => (
    <ThemeProvider theme={THEME_MAIN}>
      <BinaryUICarousel0 />
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
  ))
  .add("4 options loop with scroll", () => (
    <ThemeProvider theme={THEME_MAIN}>
      <BinaryUICarousel4LoopWithScrollView />
    </ThemeProvider>
  ));
