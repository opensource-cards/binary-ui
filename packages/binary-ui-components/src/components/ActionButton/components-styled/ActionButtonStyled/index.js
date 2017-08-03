import styled from 'styled-components';
import {
  CARDS_BUTTON_CSS,
} from '../../../../utils/styles';
import {
  CARDS_ICON_DISABLED_CSS,
} from '../../../../utils/styles.universal';
import { OPACITY_TRANSITION, getActionOpacityExt } from '../../../../utils/styles-api';

export default styled.button`
  background: none;
  border: 0;
  box-sizing: content-box;
  color: inherit;
  font: inherit;
  line-height: normal;
  outline: 0;
  padding: 0;
  opacity: ${props => getActionOpacityExt(props.isActive, props.isDisabled)};
  transition: ${OPACITY_TRANSITION};
  ${(props) => (
    (props.isDisabled)
      ? CARDS_ICON_DISABLED_CSS
      : CARDS_BUTTON_CSS
  )}
`;
