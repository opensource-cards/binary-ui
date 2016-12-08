import { EDIT_STYLE, TYPING_HIGHLIGHT_STYLE, TYPING_HIGHLIGHT_INVALID_STYLE } from './styles';

// TODO: change for RN an web
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
    return Object.assign({}, EDIT_STYLE, {
      borderBottomColor: borderColor,
    });
  }
  return EDIT_STYLE;
}

// TODO: remove
export function getActionStyle(
  style,
  styleActiveExt,
  styleDisabledExt,
  styleHoverExt,
  isActive,
  isDisabled,
  isHover
) {
  if (isDisabled) {
    return Object.assign({}, style, styleDisabledExt);
  }
  return Object.assign(
    {},
    style,
    isHover ? styleHoverExt : undefined,
    isActive ? styleActiveExt : undefined
  );
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
