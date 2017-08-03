import { FONT_FAMILY_MAIN, LIST_ITEM_HEIGHT, NO_SELECT_CSS } from 'binary-ui-styles';
import styled from 'styled-components';

export default styled.div`
  ${NO_SELECT_CSS}
  display: flex;
  font-family: ${FONT_FAMILY_MAIN};
  height: ${LIST_ITEM_HEIGHT}px;
  max-width: 100%;
  width: 100%;
`;
