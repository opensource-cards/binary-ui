import {
  LIST_ITEM_HEIGHT,
  BINARY_COLOR_BLUE_40,
  BINARY_COLOR_BLUE_60,
  BINARY_COLOR_GRAY_60,
} from 'binary-ui-styles';

export const LIST_ITEM_HALF_HEIGHT = LIST_ITEM_HEIGHT / 2;

export const HIGHLIGHT_CSS = `
  background-color: rgba(0, 0, 0, 0.05);
`;

export const CARDS_ICON_ACTIVE_CSS = `
  color: ${BINARY_COLOR_BLUE_60};
`;

export const CARDS_ICON_DISABLED_CSS = `
  color: ${BINARY_COLOR_GRAY_60};
  pointer-events: none;
`;

export const CARDS_BUTTON_CSS = `
  color: ${BINARY_COLOR_BLUE_40};
`;
