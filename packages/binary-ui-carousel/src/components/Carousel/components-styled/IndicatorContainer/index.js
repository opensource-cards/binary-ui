import styled from 'styled-components';
import { LIST_ITEM_HEIGHT } from 'binary-ui-styles';

export default styled.div`
  height: ${LIST_ITEM_HEIGHT}px;
  display: flex;
  align-items: center;
  width: ${props => props.styleWidth}px;
`;
