import { LIST_ITEM_HEIGHT } from 'binary-ui-styles';
import { NO_SELECT_CSS } from 'binary-ui-styles/web';
import styled from 'styled-components';
import { EDIT_STYLE_EXT } from '../../../../utils/styles';

const LIST_ITEM_TEXT_STYLE = `
  ${NO_SELECT_CSS}
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: ${LIST_ITEM_HEIGHT}px;
  padding-left: 10px;
`;

export default styled.div`
  ${LIST_ITEM_TEXT_STYLE}
  ${(props) => {
    if (!props.isEdit) {
      return '';
    }
    return `${EDIT_STYLE_EXT}`;
  }}
`;
