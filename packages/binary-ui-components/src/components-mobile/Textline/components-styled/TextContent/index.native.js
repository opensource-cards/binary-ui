import styled from 'styled-components/native';
import {
  FONT_DISABLED_CSS,
  FIELD_NAME_FONT_CSS,
  FIELD_VALUE_FONT_CSS,
} from '../../../../utils/styles';

export default styled.Text.attrs({
  numberOfLines: 1,
})`
  color: hsl(0, 0%, 0%);
  flex: 9;
  padding-left: 10;
  ${props => (props.isDisabled ? FONT_DISABLED_CSS : undefined)}
  ${props => (props.isBold ? FIELD_NAME_FONT_CSS : FIELD_VALUE_FONT_CSS)}
`;
