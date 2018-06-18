import styled from 'styled-components';
import { INPUT_HEIGHT } from '../../constants';

export default styled.View`
  align-items: center;
  background-color: #ffffff;
  border-radius: 15px;
  border-color: ${props => props.styleBorderColor};
  border-width: 1px;
  flex: 1;
  flex-direction: row;
  height: ${INPUT_HEIGHT + 2}px;
`;
