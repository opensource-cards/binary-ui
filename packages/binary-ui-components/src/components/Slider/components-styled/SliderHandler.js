import styled from 'styled-components';
import { LIST_ITEM_HALF_HEIGHT } from '../../../utils/styles.universal';

export default styled.div`
  background-color: white;
  border-radius: 100%;
  height: ${LIST_ITEM_HALF_HEIGHT}px;
  width: ${LIST_ITEM_HALF_HEIGHT}px;
  box-sizing: border-box;
  border: 1px solid black;
  position: absolute;
`;
