import styled from 'styled-components';
import { INPUT_HEIGHT } from '../../constants';

export default styled.input`
  border: none;
  box-sizing: border-box;
  outline: 0;

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

  color: hsl(0, 0%, 0%);
  font-family: ${props => (props.isBold ? props.theme.fontFamily600 : props.theme.fontFamily200)};
  font-size: ${props => (props.isBold ? '13px' : '18px')};
  font-weight: ${props => (props.isBold ? props.theme.fontWeight600 : props.theme.fontWeight200)};
  letter-spacing: ${props => (props.isBold ? '2px' : 'normal')};
`;
