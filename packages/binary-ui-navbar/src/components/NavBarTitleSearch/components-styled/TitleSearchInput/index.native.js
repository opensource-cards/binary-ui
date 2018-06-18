import styled from 'styled-components';
import { INPUT_HEIGHT } from '../../constants';

export default styled.TextInput`
  color: ${props => props.styleFontColor};
  flex: 1;
  font-family: ${props => (props.isBold ? props.theme.fontFamily600 : props.theme.fontFamily200)};
  font-size: 16px;
  font-weight: ${props => (props.isBold ? props.theme.fontWeight600 : props.theme.fontWeight200)};
  height: ${INPUT_HEIGHT}px;
`;
