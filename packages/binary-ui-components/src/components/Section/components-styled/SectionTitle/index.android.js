import { FONT_FAMILY_MAIN } from 'binary-ui-styles';
import styled from 'styled-components/native';
import NATIVE_STYLE from './style.native-and-web';

export default styled.Text`
  ${NATIVE_STYLE}
  font-family: ${FONT_FAMILY_MAIN};
`;
