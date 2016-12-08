import { FONT_FAMILY_MAIN, NO_SELECT_CSS } from 'binary-ui-styles/web';
import styled from 'styled-components';

const VERY_DARK_COLOR = '#404040';

export default styled.div`
  ${NO_SELECT_CSS}
  overflow: 100%;
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
  color: ${VERY_DARK_COLOR};
`;
