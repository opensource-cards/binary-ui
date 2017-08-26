import styled from 'styled-components';
import { LIST_ITEM_HEIGHT } from 'binary-ui-styles';

export default styled.div`
  height: ${LIST_ITEM_HEIGHT}px;
  align-items: center;
  width: 100%;
  overflow: hidden;
  text-overflow: hidden;
  white-space: no-wrap;
  display: flex;
  outline: 0;
`;
