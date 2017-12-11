import {
  FONT_SET_BOLD_CSS,
  FONT_SET_LIGHT_CSS,
  INPUT_RESET_CSS,
  LIST_ITEM_HEIGHT,
} from 'binary-ui-styles';
import styled from 'styled-components';

export default styled.input`
  ${INPUT_RESET_CSS}
  ${props => (props.isBold ? FONT_SET_BOLD_CSS : FONT_SET_LIGHT_CSS)}
  appearance: none;
  border-radius: 0;
  cursor: text;
  display: inline-block;
  height: ${LIST_ITEM_HEIGHT - 1}px;
  outline: 0;
  overflow: hidden;
  padding-bottom: 0;
  padding-left: 10px;
  padding-right: 0;
  padding-top: 0;
  resize: none;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  wrap: soft;
  &::-webkit-outer-spin-button;
  &::-webkit-inner-spin-button {
    margin: 0;
    -webkit-appearance: none;
  }
`;
