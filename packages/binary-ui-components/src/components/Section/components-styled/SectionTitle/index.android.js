import { MAIN_FONT_FAMILY_ANDROID } from 'binary-ui-styles/native';
import styled from 'styled-components/native';
import NATIVE_STYLE from './style.native-and-web';

export default styled.Text`
  ${NATIVE_STYLE}
  font-family: ${MAIN_FONT_FAMILY_ANDROID};
`;
