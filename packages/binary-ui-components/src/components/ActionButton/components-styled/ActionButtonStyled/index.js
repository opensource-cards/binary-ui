import styled from 'styled-components';
import {
  CARDS_BUTTON_STYLE_EXT,
  CARDS_ICON_STYLE_ACTIVE_PSEUDO,
  CARDS_ICON_STYLE_HOVER_PSEUDO,
  CARDS_ICON_STYLE_DISABLED_EXT_EXT,
} from '../../../../utils/styles';

export const RESET_BUTTON_STYLES = `
  background: none;
  border: 0;
  box-sizing: content-box;
  color: inherit;
  font: inherit;
  line-height: normal;
  outline: 0;
  padding: 0;
`;

export default styled.button`
  ${RESET_BUTTON_STYLES}
  ${CARDS_BUTTON_STYLE_EXT}
  ${(props) => (
    (props.isDisabled)
      ? CARDS_ICON_STYLE_DISABLED_EXT_EXT
      : `
        ${CARDS_ICON_STYLE_ACTIVE_PSEUDO}
        ${CARDS_ICON_STYLE_HOVER_PSEUDO}
      `
  )}
`;
