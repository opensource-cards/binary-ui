import styled from 'styled-components';
import { LIST_ITEM_HEIGHT } from 'binary-ui-styles';

export default styled.div`
  align-items: center;
  display: flex;
  height: ${LIST_ITEM_HEIGHT}px;
  width: ${props => props.styleWidth}px;
`;
