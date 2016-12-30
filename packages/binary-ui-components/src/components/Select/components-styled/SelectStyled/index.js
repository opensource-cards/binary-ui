import { MAXIMIZED_STYLE_EXT } from 'binary-ui-styles/web';
import styled from 'styled-components';
import { CARDS_INPUT_RESET_CSS, FIELD_VALUE_FONT_CSS } from '../../../../utils/styles';

export default styled.select`
  ${CARDS_INPUT_RESET_CSS}
  ${MAXIMIZED_STYLE_EXT}
  ${FIELD_VALUE_FONT_CSS}
  appearance: none;
  background: transparent;
`;
