import styled from 'styled-components';
import {
  FIELD_NAME_FONT_CSS,
  FIELD_VALUE_FONT_CSS,
  LIST_ITEM_CONTENTS_BASE_CSS,
} from '../../../../utils/styles';
import { CARDS_ICON_DISABLED_CSS } from '../../../../utils/styles.universal';

export default styled.div`
  ${props => (props.isDisabled ? CARDS_ICON_DISABLED_CSS : undefined)}
  ${props => (props.isBold ? FIELD_NAME_FONT_CSS : FIELD_VALUE_FONT_CSS)}
  ${LIST_ITEM_CONTENTS_BASE_CSS}
`;
