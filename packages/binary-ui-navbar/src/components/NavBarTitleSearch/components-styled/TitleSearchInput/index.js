import { FONT_SET_BOLD_CSS, FONT_SET_LIGHT_CSS, INPUT_RESET_CSS } from 'binary-ui-styles';
import styled from 'styled-components';
import { INPUT_HEIGHT } from '../../constants';

export default styled.input`
  ${INPUT_RESET_CSS}
  ${props => (props.isBold ? FONT_SET_BOLD_CSS : FONT_SET_LIGHT_CSS)}
  appearance: none;
  background-color: transparent;
  border-radius: inherit;
  height: ${INPUT_HEIGHT - 1}px;
  padding-bottom: 10px;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 10px;
  resize: none;
  width: 100%;
  -webkit-appearance: textfield;
`;
