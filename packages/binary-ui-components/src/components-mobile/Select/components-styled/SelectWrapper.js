import styled from 'styled-components';
import { LIST_ITEM_HEIGHT } from 'binary-ui-styles';

export default styled.div`
  align-items: center;
  box-sizing: border-box;
  cursor: default;
  display: flex;
  flex-direction: row-reverse;
  height: ${LIST_ITEM_HEIGHT}px;
  padding-left: 10px;
  position: relative;
  width: 100%;
`;
