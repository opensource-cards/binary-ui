import styled from 'styled-components';
import {
  CARDS_ICON_CSS,
  CARDS_ICON_ACTIVE_PSEUDO_CSS,
  CARDS_ICON_HOVER_PSEUDO_CSS,
} from '../../../../utils/styles';
import { CARDS_ICON_DISABLED_CSS } from '../../../../utils/styles.universal';

export default styled.div`
  ${CARDS_ICON_CSS}
  ${(props) => (
  (props.isDisabled)
    ? CARDS_ICON_DISABLED_CSS
    : `
      ${CARDS_ICON_ACTIVE_PSEUDO_CSS}
      ${CARDS_ICON_HOVER_PSEUDO_CSS}
    `
  )}
`;
