import styled from 'styled-components';
import {
  CARDS_BUTTON_CSS,
  CARDS_ICON_ACTIVE_PSEUDO_CSS,
  CARDS_ICON_HOVER_PSEUDO_CSS,
} from '../../../../utils/styles';
import {
  CARDS_ICON_DISABLED_CSS,
} from '../../../../utils/styles.universal';

export const RESET_BUTTON_CSS = `
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
  ${RESET_BUTTON_CSS}
  ${CARDS_BUTTON_CSS}
  ${(props) => (
    (props.isDisabled)
      ? CARDS_ICON_DISABLED_CSS
      : `
        ${CARDS_ICON_ACTIVE_PSEUDO_CSS}
        ${CARDS_ICON_HOVER_PSEUDO_CSS}
      `
  )}
`;
