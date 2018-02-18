import styled from 'styled-components';
import { LIST_ITEM_HEIGHT } from 'binary-ui-styles';

export default styled.div`
  align-items: center;
  display: flex;
  height: ${LIST_ITEM_HEIGHT}px;
  outline: 0;
  overflow: hidden;
  text-overflow: hidden;
  white-space: no-wrap;
  width: 100%;
`;
