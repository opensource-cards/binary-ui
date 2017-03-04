import { BINARY_COLOR_GRAY_20 } from 'binary-ui-styles';
import { FONT_FAMILY_MAIN, NO_SELECT_CSS } from 'binary-ui-styles/web';
import styled from 'styled-components';

export default styled.div`
  ${NO_SELECT_CSS}
  overflow: hidden;
  padding-bottom: 9px;
  padding-left: 10px;
  padding-top: 9px;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  font-family: ${FONT_FAMILY_MAIN};
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 13px;
  color: ${BINARY_COLOR_GRAY_20};
`;
