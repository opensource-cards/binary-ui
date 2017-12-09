import { FONT_FAMILY_MAIN_500, NO_SELECT_CSS } from 'binary-ui-styles';
import styled from 'styled-components';

export default styled.div`
  ${NO_SELECT_CSS}
  align-items: center;
  display: flex;
  font-family: ${FONT_FAMILY_MAIN_500};
  font-size: 16px;
  flex-direction: row;
  height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: opacity 0.1s ease-out;
  width: 100%;
  white-space: nowrap;
`;
