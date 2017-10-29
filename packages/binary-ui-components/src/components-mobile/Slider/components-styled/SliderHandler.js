import styled from 'styled-components';
import { LIST_ITEM_HALF_HEIGHT } from '../../../utils/styles';

export default styled.div`
  background-color: white;
  border-radius: 100%;
  box-sizing: border-box;
  border: 1px solid black;
  height: ${LIST_ITEM_HALF_HEIGHT}px;
  position: absolute;
  transform: ${props => `translate3d(${props.styleTransformX}px, ${props.styleTransformY}px, 0)`};
  width: ${LIST_ITEM_HALF_HEIGHT}px;
`;
