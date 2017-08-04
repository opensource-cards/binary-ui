import styled from 'styled-components/native';
import { FONT_FAMILY_MAIN } from 'binary-ui-styles';
import {
  FIELD_NAME_FONT_CSS,
  FIELD_VALUE_FONT_CSS,
} from '../../../../utils/styles';
import { CARDS_ICON_DISABLED_CSS } from '../../../../utils/styles.native';

export default styled.Text`
  padding-left: 10;
  font-family: ${FONT_FAMILY_MAIN};
  flex: 9;
  ${props => (props.isDisabled ? CARDS_ICON_DISABLED_CSS : undefined)}
  ${props => (props.isBold ? FIELD_NAME_FONT_CSS : FIELD_VALUE_FONT_CSS)}
`;
