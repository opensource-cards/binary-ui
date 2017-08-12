import { FONT_FAMILY_MAIN } from 'binary-ui-styles';
import styled from 'styled-components/native';
import {
  CARDS_ICON_DISABLED_CSS,
  FIELD_VALUE_FONT_CSS,
  FIELD_NAME_FONT_CSS,
} from '../../../utils/styles';

export default styled.Text`
  ${props => (props.isDisabled ? CARDS_ICON_DISABLED_CSS : `color: ${props.styleColor};`)}
  ${props => (props.isBold ? FIELD_NAME_FONT_CSS : FIELD_VALUE_FONT_CSS)}
  font-family: ${FONT_FAMILY_MAIN};
  flex: 9;
  padding-left: 10;
`;
