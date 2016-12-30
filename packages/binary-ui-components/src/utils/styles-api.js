import { getEditStyle, TYPING_HIGHLIGHT_STYLE, TYPING_HIGHLIGHT_INVALID_STYLE } from './styles';

export function getHighlightEditStyle(isEdit, isValid, isTypingHighlight, borderColor) {
  if (!isEdit) {
    return undefined;
  }
  // not valid
  if (!isValid) {
    return TYPING_HIGHLIGHT_INVALID_STYLE;
  }
  // active
  if (isTypingHighlight) {
    return TYPING_HIGHLIGHT_STYLE;
  }
  // only editable style
  if (borderColor) {
    return getEditStyle(borderColor);
  }
  return getEditStyle();
}

export function getActionColorExt(
  color = '#000000',
  colorActive,
  colorHover,
  colorDisabled,
  isActive,
  isHover,
  isDisabled
) {
  if (isDisabled) {
    return colorDisabled || color;
  }
  if (isActive && colorActive) {
    return colorActive;
  }
  if (isHover && colorHover) {
    return colorHover;
  }
  return color;
}
