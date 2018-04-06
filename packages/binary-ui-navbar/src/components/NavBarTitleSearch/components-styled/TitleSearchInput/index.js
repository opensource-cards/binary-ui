import styled from 'styled-components';
import { INPUT_HEIGHT } from '../../constants';

export default styled.input`
  background-color: transparent;
  border: none;
  border-radius: inherit;
  box-sizing: border-box;
  color: hsl(0, 0%, 0%);
  font-family: ${props => (props.isBold ? props.theme.fontFamily600 : props.theme.fontFamily200)};
  font-size: ${props => (props.isBold ? '13px' : '16px')};
  font-weight: ${props => (props.isBold ? props.theme.fontWeight600 : props.theme.fontWeight200)};
  height: ${INPUT_HEIGHT - 1}px;
  letter-spacing: ${props =>
    (props.isBold
      ? props.theme.letterSpacing2
      : props.theme.letterSpacingNormal)};
  outline: 0;
  padding-bottom: 10px;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 10px;
  resize: none;
  width: 100%;
  -webkit-appearance: textfield;
`;
