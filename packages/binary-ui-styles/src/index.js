import { FONT_FAMILY_MAIN_200, FONT_FAMILY_MAIN_600 } from './index.native-and-web';

export * from './index.native-and-web';

export const FONT_SET_BOLD_CSS = `
  color: hsl(0, 0%, 0%);
  font-family: ${FONT_FAMILY_MAIN_600};
  font-size: 13px;
  letter-spacing: 2px;
`;

export const FONT_SET_LIGHT_CSS = `
  color: hsl(0, 0%, 0%);
  font-family: ${FONT_FAMILY_MAIN_200};
  font-size: 18px;
`;

export const INPUT_RESET_CSS = `
  border: none;
  box-sizing: border-box;
  outline: 0;
`;

export const NO_SELECT_CSS = `
  user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-touch-callout: none;
`;

export const OPACITY_TRANSITION = 'opacity 0.1s ease-out';
