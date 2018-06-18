import styled from 'styled-components';
import { INPUT_HEIGHT } from '../../constants';

export default styled.div`
  align-items: center;
  background-color: #ffffff;
  border-radius: 15px;
  border-color: ${props => props.styleBorderColor};
  border-style: solid;
  border-width: 1px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  height: ${INPUT_HEIGHT + 2}px;
  padding: 0 0 0 10px;
  width: 100%;
`;
