import { LIST_ITEM_HEIGHT } from 'binary-ui-styles';
import styled from 'styled-components';

export default styled.div`
  align-content: center;
  align-items: center;
  background-color: white;
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  height: ${LIST_ITEM_HEIGHT}px;
  justify-content: space-between;
`;
