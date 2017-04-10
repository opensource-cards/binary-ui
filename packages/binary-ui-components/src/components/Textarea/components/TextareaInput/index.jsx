import styled from 'styled-components';
import { CARDS_INPUT_RESET_CSS, FIELD_VALUE_FONT_CSS } from '../../../../utils/styles';

export default styled.textarea`
  ${CARDS_INPUT_RESET_CSS}
  ${FIELD_VALUE_FONT_CSS}
  padding: 10px;
  overflow: hidden;
  min-height: 120px;
  resize: none;
  text-align: left;
  width: 100%;
  wrap: soft;
`;
