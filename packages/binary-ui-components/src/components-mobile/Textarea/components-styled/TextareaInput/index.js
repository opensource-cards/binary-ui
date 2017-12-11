import { FONT_SET_LIGHT_CSS, INPUT_RESET_CSS } from 'binary-ui-styles';
import styled from 'styled-components';

export default styled.textarea`
  ${INPUT_RESET_CSS}
  ${FONT_SET_LIGHT_CSS}
  background-color: transparent;
  border-radius: 0;
  cursor: text;
  min-height: 120px;
  overflow: hidden;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  resize: none;
  text-align: left;
  width: 100%;
  wrap: soft;
`;
