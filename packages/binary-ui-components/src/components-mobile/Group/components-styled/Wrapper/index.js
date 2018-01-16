import { LIST_ITEM_HEIGHT, NO_SELECT_CSS } from 'binary-ui-styles';
import styled from 'styled-components';

export default styled.div`
  ${NO_SELECT_CSS}
  background-color: #FFFFFF;
  display: flex;
  height: ${LIST_ITEM_HEIGHT}px;
  max-width: 100%;
  width: 100%;
`;
