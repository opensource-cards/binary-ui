import styled from 'styled-components';
import {
  CARDS_ICON_STYLE_EXT,
  CARDS_ICON_STYLE_ACTIVE_PSEUDO,
  CARDS_ICON_STYLE_HOVER_PSEUDO,
  CARDS_ICON_STYLE_DISABLED_EXT_EXT,
} from '../../../utils/styles';

export default styled.div`
  ${CARDS_ICON_STYLE_EXT}
  ${(props) => (
  (props.isDisabled)
    ? CARDS_ICON_STYLE_DISABLED_EXT_EXT
    : `
      ${CARDS_ICON_STYLE_ACTIVE_PSEUDO}
      ${CARDS_ICON_STYLE_HOVER_PSEUDO}
    `
  )}
`;
