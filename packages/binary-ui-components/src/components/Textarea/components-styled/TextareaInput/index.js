import styled from 'styled-components';
import { CARDS_INPUT_RESET_CSS, FIELD_VALUE_FONT_CSS } from '../../../../utils/styles';

export default styled.textarea`
  ${CARDS_INPUT_RESET_CSS}
  ${FIELD_VALUE_FONT_CSS}
  background-color: transparent;
  cursor: text;
  min-height: 120px;
  overflow: hidden;
  padding: 10px;
  resize: none;
  text-align: left;
  width: 100%;
  wrap: soft;
`;
