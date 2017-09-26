import { INPUT_RESET_CSS } from 'binary-ui-styles';
import styled from 'styled-components';
import { FIELD_VALUE_FONT_CSS } from '../../../../utils/styles';

export default styled.textarea`
  ${INPUT_RESET_CSS}
  ${FIELD_VALUE_FONT_CSS}
  background-color: transparent;
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
