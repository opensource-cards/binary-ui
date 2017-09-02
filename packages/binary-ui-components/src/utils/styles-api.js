import { BINARY_COLOR_BLUE_40, BINARY_COLOR_RED_40, BINARY_COLOR_SAND_90 } from 'binary-ui-styles';
import { getEditStyle } from './styles-api-utils';

export const OPACITY_ACTIVE = 0.2;
export const OPACITY_TRANSITION = 'opacity 0.1s ease-out';

export function getHighlightEditStyle(isEdit, isValid, isTypingHighlight, borderColor) {
  if (!isEdit) {
    return undefined;
  }
  if (!isValid) {
    return getEditStyle(BINARY_COLOR_RED_40);
  }
  if (isTypingHighlight) {
    return getEditStyle(BINARY_COLOR_BLUE_40);
  }
  if (borderColor) {
    return getEditStyle(borderColor);
  }
  return getEditStyle(BINARY_COLOR_SAND_90);
}

export function getActionOpacityExt(isActive, isDisabled) {
  if (isDisabled) {
    return OPACITY_ACTIVE;
  }
  if (isActive) {
    return OPACITY_ACTIVE;
  }
  return 1;
}
