import { BINARY_COLOR_GRAY_20 } from 'binary-ui-styles';
import { MAIN_FONT_FAMILY_IOS } from 'binary-ui-styles/native';
import styled from 'styled-components/native';

export default styled.Text`
  font-family: ${MAIN_FONT_FAMILY_IOS};
  font-weight: 700;
  font-size: 13;
  color: ${BINARY_COLOR_GRAY_20};
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
