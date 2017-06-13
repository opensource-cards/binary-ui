import { BINARY_COLOR_SAND_90, BINARY_COLOR_BLUE_40, BINARY_COLOR_RED_40 } from 'binary-ui-styles';
import { getEditStyle } from './styles-api-utils';

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
    return getEditStyle(borderColor || BINARY_COLOR_SAND_90);
  }
  return getEditStyle(BINARY_COLOR_SAND_90);
}

export function getActionColorExt(
  color = '#000000',
  colorActive,
  colorDisabled,
  isActive,
  isDisabled
) {
  if (isDisabled) {
    return colorDisabled || color;
  }
  if (isActive && colorActive) {
    return colorActive;
  }
  return color;
}
