import styled from 'styled-components';
import {
  CARDS_ICON_DISABLED_CSS,
  FIELD_NAME_FONT_CSS,
  FIELD_VALUE_FONT_CSS,
  LIST_ITEM_CONTENTS_BASE_CSS,
} from '../../../../utils/styles';

export default styled.div`
  ${LIST_ITEM_CONTENTS_BASE_CSS}
  ${props => (props.isDisabled ? CARDS_ICON_DISABLED_CSS : undefined)}
  ${props => (props.isBold ? FIELD_NAME_FONT_CSS : FIELD_VALUE_FONT_CSS)}
`;
