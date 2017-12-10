import { FONT_FAMILY_MAIN_500, NO_SELECT_CSS } from 'binary-ui-styles';
import styled from 'styled-components';

export default styled.div`
  ${NO_SELECT_CSS}
  font-family: ${FONT_FAMILY_MAIN_500};
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: opacity 0.1s ease-out;
  width: 100%;
  white-space: nowrap;
`;
