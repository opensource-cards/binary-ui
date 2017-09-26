
export * from './index.native-and-web';

export const FONT_FAMILY_MAIN =
'Fira Sans, Helvetica Neue, Apple SD Gothic Neo, Malgun Gothic, Segoe UI, sans-serif';

export const INPUT_RESET_CSS = `
  border: none;
  border-radius: 0;
  box-sizing: border-box;
  outline: 0;
`;

export const MAXIMIZED_STYLE = {
  width: '100%',
  height: '100%',
};

export const MAXIMIZED_CSS = `
  height: 100%;
  width: 100%;
`;

export const NO_SELECT_STYLE = {
  userSelect: 'none',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  // ios safari
  WebkitTouchCallout: 'none',
  // chrome/safari/opera
  WebkitUserSelect: 'none',
  // firefox
  MozUserSelect: 'none',
  // internet explorer/edge
  msUserSelect: 'none',
};

export const NO_SELECT_CSS = `
  user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-touch-callout: none;
`;

export const WEBSITE_RESET_STYLES = `
  * {
    outline: 0;
    -ms-content-zooming: none;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  a, div, i, span {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
`;
