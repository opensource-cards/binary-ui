import styled from 'styled-components';
import {
  FIELD_VALUE_FONT_CSS,
  FIELD_NAME_FONT_CSS,
  LIST_ITEM_CONTENTS_BASE_CSS,
} from '../../../utils/styles';
import { LIST_ITEM_HEIGHT, INPUT_RESET_CSS } from 'binary-ui-styles';

export default styled.input`
  ${INPUT_RESET_CSS}
  ${props => (props.isBold ? FIELD_NAME_FONT_CSS : FIELD_VALUE_FONT_CSS)}
  ${LIST_ITEM_CONTENTS_BASE_CSS}
  background-color: transparent;
  cursor: text;
  height: ${LIST_ITEM_HEIGHT}px;
  resize: none;
  overflow: hidden;
  padding-bottom: 0;
  padding-left: 10px;
  padding-right: 0;
  padding-top: 0;
  text-align: left;
  width: 100%;
  wrap: soft;
  &::-webkit-outer-spin-button;
  &::-webkit-inner-spin-button {
    margin: 0;
    -webkit-appearance: none;
  }
`;
