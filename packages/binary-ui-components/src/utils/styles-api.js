import { BINARY_COLOR_SAND_90, BINARY_COLOR_BLUE_40, BINARY_COLOR_RED_40 } from 'binary-ui-styles';
import { getEditStyle } from './styles-api-utils';

export const OPACITY_ACTIVE = 0.2;
export const OPACITY_TRANSITION = 'opacity 0.1s ease-out';

export function getHighlightEditStyle(isEdit, isValid, isTypingHighlight, borderColor) {
  if (!isEdit) {
    return undefined;
  }
  // not valid
  if (!isValid) {
    return getEditStyle(BINARY_COLOR_RED_40);
  }
  // active
  if (isTypingHighlight) {
    return getEditStyle(BINARY_COLOR_BLUE_40);
  }
  // only editable style
  if (borderColor) {
    return getEditStyle(borderColor);
  }
  return getEditStyle(BINARY_COLOR_SAND_90);
}

export function getActionColorExt(color, colorDisabled, isDisabled) {
  if (isDisabled) {
    return colorDisabled || color;
  }
  return color;
}

export function getActionOpacityExt(isActive, isDisabled) {
  if (isDisabled) {
    return 1;
  }
  if (isActive) {
    return OPACITY_ACTIVE;
  }
  return 1;
}
