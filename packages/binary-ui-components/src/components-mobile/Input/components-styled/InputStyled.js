import styled from 'styled-components';
import {
  CARDS_INPUT_RESET_CSS,
  FIELD_VALUE_FONT_CSS,
  FIELD_NAME_FONT_CSS,
  LIST_ITEM_CONTENTS_BASE_CSS,
} from '../../../utils/styles';
import { LIST_ITEM_HEIGHT } from 'binary-ui-styles';

export default styled.input`
  ${CARDS_INPUT_RESET_CSS}
  ${props => (props.isBold ? FIELD_NAME_FONT_CSS : FIELD_VALUE_FONT_CSS)}
  ${LIST_ITEM_CONTENTS_BASE_CSS}
  background-color: transparent;
  cursor: text;
  height: ${LIST_ITEM_HEIGHT}px;
  resize: none;
  overflow: hidden;
  padding-left: 10px;
  text-align: left;
  width: 100%;
  wrap: soft;
  &::-webkit-outer-spin-button;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
