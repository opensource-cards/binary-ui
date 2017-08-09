import { FONT_FAMILY_MAIN } from 'binary-ui-styles';
import styled from 'styled-components/native';
import { FIELD_NAME_FONT_CSS } from '../../../utils/styles';

export default styled.Text`
  ${FIELD_NAME_FONT_CSS}
  font-family: ${FONT_FAMILY_MAIN};
  flex: 8;
  padding-left: 10;
  padding-right: 10;
`;
