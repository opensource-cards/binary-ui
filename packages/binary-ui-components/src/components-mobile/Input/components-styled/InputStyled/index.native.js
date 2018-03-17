import {
  FONT_SET_BOLD_CSS,
  FONT_SET_LIGHT_CSS,
  INPUT_RESET_CSS,
  LIST_ITEM_HEIGHT,
} from 'binary-ui-styles';
import styled from 'styled-components';

export default styled.TextInput`
  ${INPUT_RESET_CSS}
  ${props => (props.isBold ? FONT_SET_BOLD_CSS : FONT_SET_LIGHT_CSS)}
  flex: 9;
  height: ${LIST_ITEM_HEIGHT};
  padding-bottom: 0;
  padding-left: 10;
  padding-right: 0;
  padding-top: 0;
`;
