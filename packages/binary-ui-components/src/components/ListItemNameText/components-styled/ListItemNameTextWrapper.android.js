import { MAIN_FONT_FAMILY_ANDROID } from 'binary-ui-styles/native';
import styled from 'styled-components/native';

const VERY_DARK_COLOR = '#404040';

export default styled.Text`
  font-family: ${MAIN_FONT_FAMILY_ANDROID};
  font-weight: 700;
  font-size: 13;
  color: ${VERY_DARK_COLOR};
  margin-left: 10;
  letter-spacing: 2;
`;

/*
width: 100%;
overflow: 100%;
padding-bottom: 9px;
padding-left: 10px;
padding-top: 9px;
text-overflow: ellipsis;
white-space: nowrap;
font-family: ${FONT_FAMILY_MAIN};
text-transform: uppercase;
letter-spacing: 2px;
*/
