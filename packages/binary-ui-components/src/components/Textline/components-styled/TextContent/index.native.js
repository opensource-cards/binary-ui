import styled from 'styled-components/native';
import { FONT_FAMILY_MAIN } from 'binary-ui-styles';
import {
  CARDS_ICON_DISABLED_CSS,
  FIELD_NAME_FONT_CSS,
  FIELD_VALUE_FONT_CSS,
} from '../../../../utils/styles';

export default styled.Text.attrs({
  numberOfLines: 1,
})`
  flex: 9;
  font-family: ${FONT_FAMILY_MAIN};
  padding-left: 10;
  ${props => (props.isDisabled ? CARDS_ICON_DISABLED_CSS : undefined)}
  ${props => (props.isBold ? FIELD_NAME_FONT_CSS : FIELD_VALUE_FONT_CSS)}
`;
