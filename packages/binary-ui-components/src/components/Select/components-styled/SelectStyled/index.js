import { MAXIMIZED_STYLE_EXT } from 'binary-ui-styles/web';
import styled from 'styled-components';
import { CARDS_INPUT_RESET_STYLE_WEB, FIELD_VALUE_FONT_STYLE_WEB } from '../../../../utils/styles';

export default styled.select`
  ${CARDS_INPUT_RESET_STYLE_WEB}
  ${MAXIMIZED_STYLE_EXT}
  ${FIELD_VALUE_FONT_STYLE_WEB}
  appearance: none;
  background: transparent;
`;
